import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router:Router , private store:StoreService) { }
  public user = {
    password: '',
    email: ''
  }
  ngOnInit() {
  }

  login(form:NgForm) {
    if(!form.valid){
      return;
    }
    const user: User = new User();
    user.id = this.user.email;
    user.password = this.user.password;
    
    this.userService.login(user.id, user.password)
      .subscribe((x:any[]) => {
        if(x.length>0){
          this.store.setState(x[0]);
          localStorage.setItem("user", JSON.stringify(x[0]));
          this.router.navigate(['/home'])
        } else {
          alert("Errore login")
        }
        
        
      }, error =>{
        alert("Errore registrazione");
      })

  }
}
