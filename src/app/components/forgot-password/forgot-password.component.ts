import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PASSWORD_REGEXP} from "../../constants/validation.constant";
import {ValidatorsService} from "../../services/validators.service";
import {BaseFormComponent} from "../../utils/base-form.component";
import {TitlePageEnum} from "../../enums/title-page.enum";

@Component({
  selector: 'jd-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.less'],
  host:{"class": "forgot-password"},
  encapsulation: ViewEncapsulation.None
})
export class ForgotPasswordComponent extends BaseFormComponent implements OnInit {

  public sendEmailForm: FormGroup = new FormGroup({});
  public restorePasswordForm: FormGroup = new FormGroup({});

  public isRequestSend: boolean = false;



  constructor(private validatorsService: ValidatorsService) {
    super();
    this.sendEmailForm = new FormBuilder().group({
      email: ['', [Validators.required, Validators.email]]
    }, {});

    this.restorePasswordForm = new FormBuilder().group({
      code: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.pattern(PASSWORD_REGEXP)]],
      confirmPass: []
    }, {validators: this.validatorsService.checkPasswords})
  }

  get email(){
    return this.sendEmailForm.get('email');
  }

  get code(){
    return this.restorePasswordForm.get('code');
  }

  get password() {
    return this.restorePasswordForm.get('password');
  }

  get confirmPass() {
    return this.restorePasswordForm.get('confirmPass');
  }

  ngOnInit(): void {
  }

  public sendEmail(){
    this.isRequestSend = true;
  }

  public changePassword(){
    this.loadComponentEvent$.next(TitlePageEnum.SIGN_IN);
  }

  public goToPrevious(){
    if (this.isRequestSend){
      this.isRequestSend = false;
    } else {
      this.loadComponentEvent$.next(TitlePageEnum.SIGN_IN);
    }
  }

}
