import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { HttpParams } from '@angular/common/http';
import { StoreService } from './store.service';
import { tap } from 'rxjs/operators';
import { UserStoreService } from './user-store.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api: ApiService , private store:UserStoreService) { }

  register(user:User):Observable<any>{
    return this.api.post('/user',user)
    .pipe(tap(user=>{
      if(user){
        localStorage.setItem("user", JSON.stringify(user));
        this.store.setState(user);
      }
    }));
  }

  login(email:string , password:string):Observable<any>{
    const param:HttpParams = new HttpParams().set("id", email).set("password", password)
    return this.api.get('/user', param)
    .pipe(tap(((users:User[])=>{
         if(users.length > 0){
           localStorage.setItem("user", JSON.stringify(users[0]));
           this.store.setState(users[0]);
         }
    })))
  }

  getUser():User{
    const userJson = localStorage.getItem("user");
    return userJson ? JSON.parse(userJson) : null;
  }

  logout(){
    localStorage.removeItem("user");
    this.store.setState(null);
  }
}
