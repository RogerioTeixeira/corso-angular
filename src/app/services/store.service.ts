import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject} from 'rxjs';
import { User } from '../model/user';
import { Store } from './commons/store';

@Injectable({
  providedIn: 'root'
})
export class StoreService extends Store<User> {

  constructor(){
     super(null);
  }

  addUser(user:User){
    this.setState(Object.assign(user));
  }
  

}
