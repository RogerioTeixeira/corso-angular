import { Injectable } from '@angular/core';
import { Prodotti } from '../model/prodotti';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService { 

  constructor(private api: ApiService) {
  }

  getAllProdotti(): Observable<any> {
    return this.api.get('/prodotti');
  }

  getProdottiHasOffer(): Observable<any> {
    return this.getAllProdotti()
    .pipe(
      map((prodotti:Prodotti[])=>{
          const arrayFiltered = prodotti.filter(item=> item.offer && item.offer > 0)
          return arrayFiltered;
      }));
  }


}
