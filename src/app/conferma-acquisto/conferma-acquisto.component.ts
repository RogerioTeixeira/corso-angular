import { Component, OnInit } from '@angular/core';
import { CarrelloService } from '../services/carrello.service';

@Component({
  selector: 'app-conferma-acquisto',
  templateUrl: './conferma-acquisto.component.html',
  styleUrls: ['./conferma-acquisto.component.css']
})
export class ConfermaAcquistoComponent implements OnInit {

  constructor(private service:CarrelloService) { }

  ngOnInit() {

    this.service.svuolta();
  }

}
