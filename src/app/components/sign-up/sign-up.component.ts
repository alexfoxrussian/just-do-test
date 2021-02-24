import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PASSWORD_REGEXP} from "../../constants/validation.constant";
import {ValidatorsService} from "../../services/validators.service";
import {BaseFormComponent} from "../../utils/base-form.component";
import {TitlePageEnum} from "../../enums/title-page.enum";
import {AuthorizationService} from "../../services/authorization.service";

@Component({
  selector: 'jd-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less'],
  host:{"class": "sign-up"},
  encapsulation: ViewEncapsulation.None
})
export class SignUpComponent extends BaseFormComponent implements OnInit {

  @Output()
  public signIn: EventEmitter<void> = new EventEmitter<void>();

  public registrationForm: FormGroup = new FormGroup({});

  constructor(private validatorsService: ValidatorsService,
              private authService: AuthorizationService) {
    super();
    this.registrationForm = new FormBuilder().group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(PASSWORD_REGEXP)]],
      confirmPass: ['']
    }, {validators: this.validatorsService.checkPasswords});
  }

  ngOnInit(): void {

  }

  get email() {
    return this.registrationForm.get('email');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get confirmPass() {
    return this.registrationForm.get('confirmPass');
  }

  public onSignInClick() {
    this.loadComponentEvent$.next(TitlePageEnum.SIGN_IN);
  }

  public onSubmit(){
    this.authService.createAccount({
      email: this.registrationForm.value.email,
      password: this.registrationForm.value.password
    }).subscribe(() => {
      this.loadComponentEvent$.next(TitlePageEnum.SIGN_IN);
    });
  }

}
