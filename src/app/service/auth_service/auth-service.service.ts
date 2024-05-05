
import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, User, signOut,onAuthStateChanged  } from "firebase/auth";
import { Observable, Observer } from 'rxjs';
import { NotificationService } from '../notifications/notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private auth = getAuth()

  constructor( private notification:NotificationService) {  }

login(email :string , password: string) : Observable<User>{
       return  new Observable((observador :Observer<User>)=>{
            signInWithEmailAndPassword(this.auth,email,password).then((userCredencial)=>{
                  observador.next(  userCredencial.user)
                  observador.complete()
            }).catch((reson)=>{
                  switch(reson.code){
                     case 'auth/user-not-found':{
                      this.notification.showNotication('Usuário não encontrado')
                        observador.error( 'Usuário não encontrado' )
                      break;
                     }
                     case 'auth/wrong-password':{
                        this.notification.showNotication('Senha inválida')
                       observador.error('Senha inválida')
                       break;
                     }
                     case 'auth/too-many-requests':{
                      this.notification.showNotication('Muitas tentavas,aguarde um momento e tente novamente')
                      observador.error('Muitas tentavas,aguarde um momento e tente novamente')
                      break;
                     }
                     default :{
                      this.notification.showNotication('Erro desconhecido,contate o suporte')
                      console.log(reson.code)
                      observador.error( reson.code)
                     }
                  }
                   
            });
       }) 
  }
  

  cadastrarUsuario(email:string,password:string):Observable<User>{
    

    return new Observable((observser: Observer<User>)=>{
      createUserWithEmailAndPassword(this.auth, email,password).then((userCredencial =>{
              observser.next(userCredencial.user)
              observser.complete()  
              
      })).catch((reson)=>{
            switch(reson.code){
              case 'auth/email-already-in-use':{
                 this.notification.messages.push('e-mail em uso')
                observser.error('e-mail em uso');
                break;
              }
              default: {
                observser.error(reson.code)
              }
            }     
      })
         

    })
    
 }
 getActualUser():Observable<User | null>{
   
   return new Observable((observer :Observer<User | null>)=>{
    onAuthStateChanged(
      this.auth,
       (user)=>observer.next(user)
      ,(err)=>console.log(err.message)
    )

   })  
 }

 getCurrentUser(): User | null {
   
   const user = this.auth.currentUser;
    
   return user; 
  }


 logout(){
   signOut(this.auth)
 }
}
