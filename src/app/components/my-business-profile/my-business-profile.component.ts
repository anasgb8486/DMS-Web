import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-my-business-profile',
  templateUrl: './my-business-profile.component.html',
  styleUrls: ['./my-business-profile.component.css']
})
export class MyBusinessProfileComponent implements OnInit {

  @Output() closePopupEvent = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

  cancelRequest(): void {
    this.closePop();
  }

  closePop(): any {
    return this.closePopupEvent.emit(null);
  }

}
