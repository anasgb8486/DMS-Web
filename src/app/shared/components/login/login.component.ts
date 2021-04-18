import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() closePopupEvent = new EventEmitter<void>();
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  cancelRequest(): void {
    // this.postRequirmentForm.reset();
    // this._router.navigate(['home']);
    this.closePop();
  }

  registerUser(): void {
    this.closePop();
    this._router.navigate(['register']);
  }

  closePop(): void {
    this.closePopupEvent.emit();
  }
}
