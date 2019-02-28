import { Component, OnInit } from '@angular/core';
import { CarrelloStoreService } from '../services/carrello-store.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(public carrello:CarrelloStoreService) { }

  ngOnInit() {
  }

}
