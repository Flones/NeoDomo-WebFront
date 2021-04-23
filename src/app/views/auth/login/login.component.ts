import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../_helpers/auth.service';

interface myForm {
  email: string;
  password: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  form: FormGroup;
  public blankUser: myForm = {
    email: "",
    password: "",
  }

  constructor(private _service: AuthService, private router: Router) { }

  public submit() {
    console.log(this.blankUser);
    this._service.postLogin(this.blankUser.email, this.blankUser.password)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['..']);
      });
  }
}
