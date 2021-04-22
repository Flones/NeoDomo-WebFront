import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
@Injectable({
  providedIn: "root",
})
export class NeoServiceService {
  postCreateUser(email: string, password: string, username: string, firstname: string, lastname: string) {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) { }

  getTest() {
    //return this.http.get(`${environment.baseUrl}/api/titi/toto`);
    return this.http.get(`${environment.baseUrl}/application/test`);
  }
}

