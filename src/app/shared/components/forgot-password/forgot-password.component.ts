import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  public ForgotPassword: FormGroup;
  @Output() closePopupEvent = new EventEmitter<any>();
  constructor(
    private _formBuilder: FormBuilder,
    private _loginService: LoginService) { }

  ngOnInit(): void {
    this.ForgotPassword = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  closePop(user: any): any {
    return this.closePopupEvent.emit(user);
  }

  cancelRequest(user: any): void {
    this.closePop(user);
  }

  onSubmit(): void{
    const email = this.ForgotPassword.get('email').value;
    this._loginService.forgotPassword(email).subscribe((result) => {
      console.log(result);
    }, (error) => {
    });
  }

}
