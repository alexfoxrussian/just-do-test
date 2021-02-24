import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[jdTitle]'
})
export class TitleDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
