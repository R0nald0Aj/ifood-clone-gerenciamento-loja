import { Component } from '@angular/core';
import { Navigation, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth_service/auth-service.service';
import { NotificationService } from 'src/app/service/notifications/notification.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  constructor(private auth:AuthServiceService , private router : Router){
  }

  logout(){
    this.auth.logout()
  }

}
