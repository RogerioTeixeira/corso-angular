import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcPrice'
})
export class CalcPricePipe implements PipeTransform {

  transform(price: number, offer?: number): any {
    return price - (price * (offer/100));
  }

}
