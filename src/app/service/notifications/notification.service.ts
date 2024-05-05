import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
   messages : string[] = []

  constructor() { }

  showNotication(message : string){
     this.messages.push(message);
  }

  cleartNotification(){
     this.messages = []
  }
}
