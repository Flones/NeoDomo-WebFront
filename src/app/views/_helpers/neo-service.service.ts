import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
@Injectable({
  providedIn: "root",
})
export class NeoServiceService {
  constructor(private http: HttpClient) { }

  getTest() {
    //return this.http.get(`${environment.baseUrl}/api/titi/toto`);
    return this.http.get(`${environment.baseUrl}/application/test`);
  }

  postCreateUser(email: string, password: string , username: string, firstname: string ,lastname: string) {
    let body = new URLSearchParams();
    body.set('email', email);
    body.set('password', password);
    body.set('username', username);
    body.set('firstname', firstname);
    body.set('lastname', lastname);

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    return this.http.post(`${environment.baseUrl}/application/createUser`,body.toString(), options);
  }

  postLogin(email: string, password: string) {
    let body = new URLSearchParams();
    body.set('email', email);
    body.set('password', password);

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    return this.http.post(`${environment.baseUrl}/application/login`,body.toString(), options);
  }
}

