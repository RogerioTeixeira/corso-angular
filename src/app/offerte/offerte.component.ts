import { Component, OnInit } from '@angular/core';
import { ProdottiService } from '../services/prodotti.service';

@Component({
  selector: 'app-offerte',
  templateUrl: './offerte.component.html',
  styleUrls: ['./offerte.component.css']
})
export class OfferteComponent implements OnInit {

  public listaProdotti:any[];
  constructor(private prodottiService:ProdottiService) { }

  ngOnInit() {
     this.prodottiService.getProdottiHasOffer()
     .subscribe((result)=>{
       this.listaProdotti = result;
     })
  }

}
