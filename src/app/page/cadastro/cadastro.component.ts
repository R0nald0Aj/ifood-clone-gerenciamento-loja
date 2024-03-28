import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/serivce/auth-service.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent  implements OnInit{
formCadastro!:FormGroup 

constructor(private authService:AuthServiceService,private router : Router){

}
  ngOnInit(): void {
    this.formCadastro = new FormGroup({
      name : new FormControl('',[Validators.required]),
      email:new FormControl("",[Validators.required]),
      password:new FormControl("",Validators.required)
    })
  }

  
  cadastrar(){
     if (this.formCadastro.valid) {
         const result  = this.authService.cadastrarUsuario(this.name?.value,this.email?.value,this.password?.value)
           if (result) {
                this.router.navigate(['home'])
           }
        }
  }

  get name(){
     return this.formCadastro.get('name')
  }

  get email(){
     return   this.formCadastro.get('email')
  }

  get password(){
    return this.formCadastro.get('passoword')
  }




}
