export class Prodotti {
    id: number;
    name: string;
    collection:string;
    description: string;
    brand:string;
    image:string;
    price: number;
    offer?:number;
    constructor(value?:Prodotti) {
        this.id = null;
        this.name = null;
        this.brand = null;
        this.description = null;
        this.price = null;
        this.image = null;
        this.collection = null;
        if(value){
            Object.assign(this,value);
        }
    }
}