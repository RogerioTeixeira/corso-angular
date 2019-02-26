import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { HttpParams } from '@angular/common/http';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api: ApiService , private store:StoreService) { }

  register(user:User):Observable<any>{
    return this.api.post('/user',user);
  }

  login(email:string , password:string):Observable<any>{
    const param:HttpParams = new HttpParams().set("id", email).set("password", password)
    return this.api.get('/user', param);
  }

  getUser():User{
    const userJson = localStorage.getItem("user");
    return userJson ? JSON.parse(userJson) : null;
  }

  logout(){
    localStorage.removeItem("user");
    this.store.sendValue(new User());
  }
}