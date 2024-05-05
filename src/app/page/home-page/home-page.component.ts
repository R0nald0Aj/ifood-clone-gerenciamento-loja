import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth_service/auth-service.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  isLosadingLogin : boolean =false
  
  constructor (private route : Router, private authService : AuthServiceService){}
  ngOnInit(): void {
     this.userLogged()
     this.getActualUser()
    } 
   
   getActualUser(){
    this.authService.getActualUser().subscribe({
      next : (user) =>{
        console.log(user?.email)
          if (user == null) {
            
             this.route.parseUrl('/login')
          }
      },
      error: (error)=> {
        console.log(error);
      }
    })
   }

  userLogged(){
    this.isLosadingLogin =true
    setTimeout(() => {
      console.log("nvaigate")
      this.route.navigate(['home/dashboard']);
      this.isLosadingLogin=false
    }, 1000);
  }
 

}
