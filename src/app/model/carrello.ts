import { Prodotti } from './prodotti';

export class Carrello {
    id: string;
    prodotti: Prodotti[];
    constructor(value?:Carrello) {
        this.id = null;
        this.prodotti = [];
        if(value){
            Object.assign(this,value);
        }
    }
}