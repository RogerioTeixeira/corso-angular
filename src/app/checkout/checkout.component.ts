import { Component, OnInit, OnDestroy ,  } from '@angular/core';
import { CarrelloStoreService } from '../services/carrello-store.service';
import { Prodotti } from '../model/prodotti';
import { CarrelloService } from '../services/carrello.service';
import { Router } from '@angular/router';
import { UserStoreService } from '../services/user-store.service';
import { Subscription } from 'rxjs';
 
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit , OnDestroy {
  
  sub:Subscription;
  constructor(public carrello:CarrelloStoreService,public carrelloService:CarrelloService , private router:Router, private userStore:UserStoreService) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    if(this.sub){
      this.sub.unsubscribe();
    }
    
  }

  elimina(prodotto:Prodotti){
     this.carrelloService.elimina(prodotto);
  }

  acquista(){
    this.sub = this.userStore.state.subscribe(user=>{
       if(user){
         
           this.router.navigate(['conferma']);
       } else {
         this.router.navigate(['login']);
       }
    })
 }

}
