import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  login(email :string , password: string) : Boolean{
      if(email.length != 0 && password.length != 0){
        console.log(`${password} : ${email}`)
        return true
      }
      console.log("email ou senha bad")
      return false
  }
  

  cadastrarUsuario(nome :string , email:string,password:string):Boolean{
        if (nome.length != 0 && email.length !=0 && password.length != 0) {
          return true
        }
        return false
  }
}
