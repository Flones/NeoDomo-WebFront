import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { NeoServiceService } from '../../_helpers/neo-service.service';
interface monform {
  email: string;
  username: string;
  lastname: string;
  firstname: string;
  password: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  form: FormGroup;
  public blankUser: monform = {
    email: "",
    username: "",
    lastname: "",
    firstname: "",
    password: "",
  }

  constructor(private _service: NeoServiceService) { }

  public submit() {
    console.log(this.blankUser);
    this._service.postCreateUser(this.blankUser.email, this.blankUser.password, this.blankUser.username, this.blankUser.firstname, this.blankUser.lastname)
    .subscribe(res => { console.log(res) });
  }
}
