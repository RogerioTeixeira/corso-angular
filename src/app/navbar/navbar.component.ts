import { Component, OnInit, Input } from '@angular/core';
import { NavbarConfig } from '.';
import { StoreService } from '../services/store.service';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() navConfig:NavbarConfig;

  user:User;
  constructor(private store:StoreService , private userService:UserService) { }

  ngOnInit() {
    this.store.getValue().subscribe(x=>{
        this.user = x;
    })
  }

  logout(){
    this.userService.logout()
  }

}
