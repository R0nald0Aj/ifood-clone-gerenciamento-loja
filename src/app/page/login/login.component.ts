import { Component, OnInit, inject, } from '@angular/core';
import { FormControl,FormGroup,FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { ErrorMessagesService } from 'src/app/utils/error-messages.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{

  isLosadingLogin : boolean = false

  form! : FormGroup 
  constructor(
    private router : Router,
    private authService : AuthServiceService,
    public errorMessager:ErrorMessagesService
    ){
  
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      email : new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required ,Validators.minLength(5)]),
    })
  }

  get email(){
    return this.form.get('email')
  }

  get password(){
    return this.form.get('password')
  }

  login(){
    
  if (this.form.valid) {
    this.isLosadingLogin = true
    setTimeout(() => {
      const retorno = this.authService.login( this.form.value.email ?? '',this.form.value.password ?? '')
      if(retorno){
        this.router.navigate(['home']);
      }
      this.isLosadingLogin = false
    }, 3000);
    }
  }
}
