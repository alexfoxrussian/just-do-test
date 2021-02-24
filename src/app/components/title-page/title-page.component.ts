import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {AutoUnsubscribe} from "../../utils/auto-unsubscribe";
import {TitleDirective} from "../../directives/title.directive";
import {SignUpComponent} from "../sign-up/sign-up.component";
import {SignInComponent} from "../sign-in/sign-in.component";
import {ForgotPasswordComponent} from "../forgot-password/forgot-password.component";
import {Subject} from "rxjs";
import {TitlePageEnum} from "../../enums/title-page.enum";

@Component({
  selector: 'jd-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.less']
})
export class TitlePageComponent extends AutoUnsubscribe implements OnInit {

  @ViewChild(TitleDirective, {static: true})
  public jdTitle: TitleDirective;

  public isForgotPass: boolean = false;
  public isShowTerms: boolean = false;
  public isShowPolicy: boolean = false;

  public loadComponentEvent$ : Subject<string> = new Subject<string>();


  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    super();
  }

  ngOnInit(): void {
    this.loadComponent(TitlePageEnum.SIGN_UP);
    this.loadComponentEvent$.subscribe( (eventKey: string) => {
      this.loadComponent(eventKey);
    })
  }

  public loadComponent(eventKey: string) {
    let componentFactory;
    let componentRef;

    const viewContainerRef = this.jdTitle.viewContainerRef;
    viewContainerRef.clear();

    this.isForgotPass = false;

    switch (eventKey) {
      case TitlePageEnum.SIGN_UP:
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(SignUpComponent);
        componentRef = viewContainerRef.createComponent<SignUpComponent>(componentFactory);
        componentRef.instance.loadComponentEvent$ = this.loadComponentEvent$;
        break;
      case TitlePageEnum.SIGN_IN:
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(SignInComponent);
        componentRef = viewContainerRef.createComponent<SignInComponent>(componentFactory);
        componentRef.instance.loadComponentEvent$ = this.loadComponentEvent$;
        break;
      case TitlePageEnum.FORGOT_PASS:
        this.isForgotPass = true;
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(ForgotPasswordComponent);
        componentRef = viewContainerRef.createComponent<ForgotPasswordComponent>(componentFactory);
        componentRef.instance.loadComponentEvent$ = this.loadComponentEvent$;
        break;
    }
  }

  public toggleTerms(){
    this.isShowTerms = !this.isShowTerms;
  }

  public togglePolicy(){
    this.isShowPolicy = !this.isShowPolicy;
  }
}
