import { Component, OnInit, Input , OnDestroy} from '@angular/core';
import { NavbarConfig } from '.';
import { StoreService } from '../services/store.service';
import { User } from '../model/user';
import { UserService } from '../services/user.service';
import { UserStoreService } from '../services/user-store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit ,  OnDestroy {
 

  @Input() navConfig:NavbarConfig;

  user:User;
  sub:Subscription;
  constructor(private store:UserStoreService , private userService:UserService) { }

  ngOnInit() {
    this.sub = this.store.state.subscribe(x=>{
       console.log('user:' , x)
        this.user = x;
    })
  }

  logout(){
    this.userService.logout()
  }

  ngOnDestroy(): void {
     this.sub.unsubscribe();
  }

}
