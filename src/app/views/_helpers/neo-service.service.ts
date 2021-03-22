import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
@Injectable({
  providedIn: "root",
})
export class NeoServiceService {
  constructor(private http: HttpClient) {}

  getTest() {
    return this.http.get(`${environment.baseUrl}/api/titi/toto`);
  }
}
