import { Component, OnInit, Input } from '@angular/core';
import { Prodotti } from 'src/app/model/prodotti';

@Component({
  selector: 'app-lista-prodotti',
  templateUrl: './lista-prodotti.component.html',
  styleUrls: ['./lista-prodotti.component.css']
})
export class ListaProdottiComponent implements OnInit {
  
  @Input() listaProdotti:Prodotti[];

  constructor() { }

  ngOnInit() {
  }

}
