import { Component , OnInit } from '@angular/core';
import { NavbarService } from './services/navbar.service';
import { UserService } from './services/user.service';
import { StoreService } from './services/store.service';
import { NavbarConfig } from './navbar';
import { UserStoreService } from './services/user-store.service';
import { CarrelloService } from './services/carrello.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   navbarConfig:NavbarConfig;

  constructor(public navbarService: NavbarService,
    private userService: UserService,
    private carrello:CarrelloService,
    private store: UserStoreService) {

  }

  ngOnInit(): void {
  this.store.state
  .subscribe(user=>{
    
    if(user){
        this.navbarConfig = this.navbarService.getNavbarConfig(true);
    } else {
      this.navbarConfig = this.navbarService.getNavbarConfig(false);
    }
  })

   const user = this.userService.getUser();
   if(user){
     this.store.setState(user);
   }

   this.carrello.load();
  }


}
