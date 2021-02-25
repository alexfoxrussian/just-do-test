import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PASSWORD_REGEXP} from "../../constants/validation.constant";
import {BaseFormComponent} from "../../utils/base-form.component";
import {TitlePageEnum} from "../../enums/title-page.enum";
import {AuthorizationService} from "../../services/authorization.service";
import {UserType} from "../../models/user.type";
import {Router} from "@angular/router";

@Component({
  selector: 'jd-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.less'],
  host: {"class": "sign-in"},
  encapsulation: ViewEncapsulation.None
})
export class SignInComponent extends BaseFormComponent implements OnInit {

  public authorizationForm: FormGroup = new FormGroup({});

  @Output()
  public signUp: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public forgotPass: EventEmitter<void> = new EventEmitter<void>();

  constructor(private authService: AuthorizationService, private router: Router) {
    super();
    this.authorizationForm = new FormBuilder().group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(PASSWORD_REGEXP)]]
    }, {});
  }

  ngOnInit(): void {
  }

  get email() {
    return this.authorizationForm.get('email');
  }

  get password() {
    return this.authorizationForm.get('password');
  }

  public onSubmit() {
    this.authService.getAccount({
      email: this.authorizationForm.value.email,
      password: this.authorizationForm.value.password
    }).subscribe((response:UserType) => {
      console.log("Response",response);
      if(response.password === this.authorizationForm.value.password){
        localStorage.setItem("loggedIn","true");
        this.router.navigate(['/todos']);
      } else {
        alert("Wrong password");
      }
    });
  }

  public onSignUpClick() {
    this.loadComponentEvent$.next(TitlePageEnum.SIGN_UP);
  }

  public onForgotPassword() {
    this.loadComponentEvent$.next(TitlePageEnum.FORGOT_PASS);
  }

}
