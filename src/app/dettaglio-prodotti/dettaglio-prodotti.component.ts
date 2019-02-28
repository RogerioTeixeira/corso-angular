import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdottiService } from '../services/prodotti.service';
import { Observable } from 'rxjs';
import { Prodotti } from '../model/prodotti';

@Component({
  selector: 'app-dettaglio-prodotti',
  templateUrl: './dettaglio-prodotti.component.html',
  styleUrls: ['./dettaglio-prodotti.component.css']
})
export class DettaglioProdottiComponent implements OnInit {
  $prodotti:Observable<Prodotti>;

  constructor(private route:ActivatedRoute , private prodotti:ProdottiService) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.$prodotti= this.prodotti.getProdottoById(id)
  }

}
