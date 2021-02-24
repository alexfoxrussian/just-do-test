import {Directive, OnDestroy} from '@angular/core';
import { Subject } from 'rxjs';

@Directive({selector:"[autoUnsubscribe]"})
export class AutoUnsubscribe implements OnDestroy {

  protected streamEndSubject = new Subject();

  ngOnDestroy(): void {
    this.streamEndSubject.next();
    this.streamEndSubject.complete();
  }
}
