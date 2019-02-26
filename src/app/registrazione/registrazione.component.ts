import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/user';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {

  constructor(private userService: UserService, private router:Router) { }
  public user = {
    name: '',
    password: '',
    email: ''
  }
  ngOnInit() {
  }

  registra(form:NgForm) {
    if(!form.valid){
      return;
    }
    const user: User = new User();
    user.id = this.user.email;
    user.password = this.user.password;
    user.name = this.user.name;
    
    this.userService.register(user)
      .subscribe(x => {
        this.router.navigate(['/home'])
      }, error =>{
        alert("Errore registrazione");
      })

  }

}
