import { Component, OnInit, Input } from '@angular/core';
import { Prodotti } from 'src/app/model/prodotti';

@Component({
  selector: 'app-lista-alternative',
  templateUrl: './lista-alternative.component.html',
  styleUrls: ['./lista-alternative.component.css']
})
export class ListaAlternativeComponent implements OnInit {
   @Input() prodotti:Prodotti[];
  constructor() { }

  ngOnInit() {
  }

}
