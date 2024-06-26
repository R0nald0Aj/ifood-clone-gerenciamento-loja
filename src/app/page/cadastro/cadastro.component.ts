import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth_service/auth-service.service';
import { ErrorMessagesService } from 'src/app/utils/error-messages.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent  implements OnInit{
formCadastro!:FormGroup 
isLosadingLogin : boolean =false

constructor(
  private authService:AuthServiceService,
  private router : Router,
  public erroMessage : ErrorMessagesService
  ){

}
  ngOnInit(): void {
    this.formCadastro = new FormGroup({
      name : new FormControl("",[Validators.required]),
      email:new FormControl("",[Validators.required,Validators.email]),
      password:new FormControl("",[Validators.required,Validators.minLength(5)])
    })
  }

  
  cadastrar(){
     if (this.formCadastro.valid) {
       this.isLosadingLogin = true
      
        this.authService.cadastrarUsuario(this.email?.value,this.password?.value).subscribe({
          next:(data)=>{
             this.authService.logout();
            this.router.navigate(['/login'])
          },
          error :(erro)=>{
            console.log(erro)
          }
        })
        
        this.isLosadingLogin = false;  
        }
  }

  get name(){
     return this.formCadastro.get('name')
  }

  get email(){
     return   this.formCadastro.get('email')
  }

  get password(){
    return this.formCadastro.get('password')
  }




}
