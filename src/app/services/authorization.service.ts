import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserType} from "../models/user.type";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private http: HttpClient) {
  }

  public createAccount(user: UserType) {
    return this.http.post('/api/users', user, {});
  }

  public getAccount(user: UserType) {
    return this.http.get('/api/users', {
      params: {email: user.email}
    });
  }
}
