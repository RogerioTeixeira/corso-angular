import { Injectable } from '@angular/core';
import { Carrello } from '../model/carrello';
import { Store } from './commons/store';

@Injectable({
  providedIn: 'root'
})
export class CarrelloStoreService extends Store<Carrello> {

  constructor() {
    super(new Carrello())
   }
}
