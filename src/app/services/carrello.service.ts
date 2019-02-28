import { Injectable } from '@angular/core';
import { Prodotti } from '../model/prodotti';
import { Carrello } from '../model/carrello';
import { CarrelloStoreService } from './carrello-store.service';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {

  constructor(private store:CarrelloStoreService) { } 

  add(prodotto:Prodotti){
    const carrello = localStorage.getItem("carrello");
    if(carrello){
      const carrelloParsed:Carrello = new Carrello(JSON.parse(carrello));
      carrelloParsed.prodotti.push(prodotto);
      this.store.setState(carrelloParsed);
      localStorage.setItem("carrello", JSON.stringify(carrelloParsed));
    } else {
      const carrelloParsed:Carrello = new Carrello();
      carrelloParsed.prodotti.push(prodotto);
      this.store.setState(carrelloParsed);
      localStorage.setItem("carrello", JSON.stringify(carrelloParsed));
    }
    
  }

  load(){
    const carrello = localStorage.getItem("carrello");
    if(carrello){
      const carrelloParsed:Carrello = new Carrello(JSON.parse(carrello));
      this.store.setState(carrelloParsed);
    }
  }

  elimina(prodotto:Prodotti){
    const carrello = localStorage.getItem("carrello");
    if(carrello){
      const carrelloParsed:Carrello = new Carrello(JSON.parse(carrello));
      carrelloParsed.prodotti = carrelloParsed.prodotti.filter(x=>x.id != prodotto.id);
      localStorage.setItem("carrello", JSON.stringify(carrelloParsed));
      this.store.setState(carrelloParsed);
    }

  }

  svuolta(){
    localStorage.setItem("carrello", JSON.stringify(new Carrello()));
    this.store.setState(new Carrello());
  }
}
