import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject} from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private store: BehaviorSubject<any> = new BehaviorSubject(new User());
  constructor() { }
  
  public sendValue(value:any){
    this.store.next(value);
  }

  public getValue():Observable<any>{
    return this.store.asObservable();
  }

}
