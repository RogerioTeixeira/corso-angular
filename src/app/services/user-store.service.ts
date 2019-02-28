import { Injectable } from '@angular/core';
import { Store } from './commons/store';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService extends Store<User> {

  constructor() {
    super(null);
   }
}
