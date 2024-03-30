import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessagesService {
  errorMessenger :string[] = [
    "nome ináalido",
    "email inválido",
    "email deve conter '@'  e '.com'",
    "Senha invalida,campo deve conter pelo menos 5 caracteres",
  ]
  
  constructor() { }

  getErroMessege(positon :number):string{
    return this.errorMessenger[positon]
  }
}
