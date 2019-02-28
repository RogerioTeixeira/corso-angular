import { Component, OnInit } from '@angular/core';
import { CarrelloStoreService } from '../services/carrello-store.service';
import { Prodotti } from '../model/prodotti';
import { CarrelloService } from '../services/carrello.service';
import { Router } from '@angular/router';
import { UserStoreService } from '../services/user-store.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  constructor(public carrello: CarrelloStoreService, public carrelloService: CarrelloService, private router: Router, private userStore: UserStoreService) { }
  ngOnInit() {
  }
  elimina(prodotto: Prodotti) {
    this.carrelloService.elimina(prodotto);
  }
  acquista() {
    this.userStore.state.subscribe(user => {
      if (user) {
        this.router.navigate(['conferma']);
      }
      else {
        this.router.navigate(['login']);
      }
    });
  }
}
