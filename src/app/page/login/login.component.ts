import { Component, OnDestroy, OnInit, inject, } from '@angular/core';
import { FormControl,FormGroup,FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth_service/auth-service.service';

import { ErrorMessagesService } from 'src/app/utils/error-messages.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit,OnDestroy{

  isLosadingLogin : boolean = false
  form! : FormGroup 

  constructor(
    private router : Router,
    public errorMessager:ErrorMessagesService,
    private authService : AuthServiceService
    ){
  
  }
  ngOnDestroy(): void {
    
  }
  ngOnInit(): void {
    this.verifyUserLogged()
    this.form = new FormGroup({
      email : new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required ,Validators.minLength(5)]),
    })
  }

  verifyUserLogged(){
     const user = this.authService.getActualUser().subscribe({
       next: (data) =>{
        console.log(data?.email)
        if (user != null) this.router.navigate(['/home'])
       }
     }).unsubscribe
      
    }

  // createUser(email :string, passowrd : string){
  //    createUserWithEmailAndPassword(this.auth, email,passowrd).then((userCredencial =>{
  //       console.log(userCredencial)
  //    }))
  // }

  get email(){
    return this.form.get('email')
  }

  get password(){
    return this.form.get('password')
  }

  login(){
  if (this.form.valid) {
    this.isLosadingLogin = true
    this.authService.login(this.email?.value,this.password?.value).subscribe({
      next: (user) =>{
        console.log(user.email)
        if (user != null) {
             this.router.navigate(['home']);
        }
      },
      error:(errorr)=>{console.log(errorr)}
    });

    this.isLosadingLogin = false
    }
  }


}
