import { Injectable } from '@angular/core';
import { Notification } from './notification';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NotificationService {
  public subject = new Subject<Notification>();

  constructor() {}

  set(notification: Notification) {
    this.subject.next(notification);
  }

  get():Observable<Notification> {
    return this.subject.asObservable();
  }

}
