import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() closePopupEvent = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  cancelRequest(): void {
    // this.postRequirmentForm.reset();
    // this._router.navigate(['home']);
    this.closePop();
  }

  closePop(): void {
    this.closePopupEvent.emit();
  }
}
