import { Component, OnInit, Input } from '@angular/core';
import { Prodotti } from 'src/app/model/prodotti';
import { ActivatedRoute } from '@angular/router';
import { CarrelloService } from 'src/app/services/carrello.service';

@Component({
  selector: 'app-scheda-prodotto',
  templateUrl: './scheda-prodotto.component.html',
  styleUrls: ['./scheda-prodotto.component.css']
})
export class SchedaProdottoComponent implements OnInit {
  @Input() prodotto:Prodotti;

  constructor(private carrello:CarrelloService) { }

  ngOnInit() {
    
  }

  add(prodotto:Prodotti){
    this.carrello.add(prodotto);
  }

}
