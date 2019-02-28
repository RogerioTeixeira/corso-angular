import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdottiService } from '../services/prodotti.service';
import { Observable } from 'rxjs';
import { Prodotti } from '../model/prodotti';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-dettaglio-prodotti',
  templateUrl: './dettaglio-prodotti.component.html',
  styleUrls: ['./dettaglio-prodotti.component.css']
})
export class DettaglioProdottiComponent implements OnInit {
  $prodotti: Observable<Prodotti>;
  $prodottiAlternativi: Observable<Prodotti[]>;

  constructor(private route: ActivatedRoute, private prodotti: ProdottiService) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.$prodotti = this.prodotti.getProdottoById(param.id);
      this.$prodottiAlternativi = this.prodotti.getProdottoById(param.id)
        .pipe(switchMap(prodotto => {
          return this.prodotti.getProdottoByBrand(prodotto.brand).pipe(map(lista=>lista.filter(item=>item.id != prodotto.id )))
        }))
    })


  }

}
