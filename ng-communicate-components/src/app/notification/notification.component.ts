import { Component } from '@angular/core';
import { Notification } from './notification';
import { NotificationService } from './notification.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'notification',
  templateUrl: './notification.component.html',
})
export class NotificationComponent {
  public notification: Notification;
  public subscription: Subscription;

  constructor(private notificationService: NotificationService) {
    this.subscription = this.notificationService.get().subscribe(value => {this.notification = value});
  }

  close() {
    this.notificationService.set(null);
  }
}
