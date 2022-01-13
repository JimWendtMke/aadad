import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { GlobalMessageType } from '../interfaces/global-message-type';

@Injectable({
  providedIn: 'root'
})
export class GlobalMessageService {

  private subject = new Subject<any>();

  sendMessage(message: GlobalMessageType) {
    this.subject.next(message);
  }

  clearMessages() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

}