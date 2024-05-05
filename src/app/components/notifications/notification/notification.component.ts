import { Component } from '@angular/core';
import { NotificationService } from 'src/app/service/notifications/notification.service';

@Component({
  selector: 'app-notification',
  standalone: false,
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {

  constructor( public notificatio:NotificationService){
    
  }
}
