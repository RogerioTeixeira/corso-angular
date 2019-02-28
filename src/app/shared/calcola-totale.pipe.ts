import { Pipe, PipeTransform } from '@angular/core';
import { Prodotti } from '../model/prodotti';

@Pipe({
  name: 'calcolaTotale'
})
export class CalcolaTotalePipe implements PipeTransform {

  transform(prodotti:Prodotti[], args?: any): any {
    return prodotti.reduce((acc:number , curr:Prodotti)=>{
      return acc + curr.price;
    }, 0);
  }

}
