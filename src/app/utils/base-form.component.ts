import {AutoUnsubscribe} from "./auto-unsubscribe";
import {Subject} from "rxjs";

export class BaseFormComponent extends AutoUnsubscribe{

  public loadComponentEvent$: Subject<string>;

  constructor() {
    super();
  }

}
