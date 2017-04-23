import { Component } from '@angular/core';
import { NotificationService } from './notification/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(private notificationService: NotificationService) {}
  
  success() {
    this.notificationService.set({type: 'success', message: 'Success! Everything went as planned.'});
  }
  error() {
    this.notificationService.set({type: 'error', message: 'Error! Seems that something went wrong.'});
  }
}
