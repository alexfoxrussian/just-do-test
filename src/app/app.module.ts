import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {TitlePageComponent} from './components/title-page/title-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SignInComponent} from './components/sign-in/sign-in.component';
import {TitleDirective} from './directives/title.directive';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import {AuthorizationService} from "./services/authorization.service";
import {HttpClientModule} from "@angular/common/http";
import {TodosComponent} from './components/todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    TitlePageComponent,
    SignInComponent,
    TitleDirective,
    ForgotPasswordComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
