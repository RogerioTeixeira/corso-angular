export class User {
    id: string;
    name: string;
    password:string;
    constructor(value?:User) {
        this.id = null;
        this.name = null;
        this.password = null;
        if(value){
            Object.assign(this,value);
        }
    }
}