import { Component, OnInit, Input } from '@angular/core';
import { Prodotti } from 'src/app/model/prodotti';

@Component({
  selector: 'app-scheda-prodotto',
  templateUrl: './scheda-prodotto.component.html',
  styleUrls: ['./scheda-prodotto.component.css']
})
export class SchedaProdottoComponent implements OnInit {
  @Input() prodotto:Prodotti;

  constructor() { }

  ngOnInit() {
  }

}
