import { Component, OnInit } from '@angular/core';
import { ProdottiService } from '../services/prodotti.service';
import { Prodotti } from '../model/prodotti';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public listaProdotti:any[];
  constructor(private prodottiService:ProdottiService) { }

  ngOnInit() {
     this.prodottiService.getAllProdotti()
     .subscribe((result)=>{
       this.listaProdotti = result;
     })
  }

  

}
