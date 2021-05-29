import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';
import { ApploadDataService } from '../../services/appload-data.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public catagories: any[] = [];
  public distributorLeads: any[] = [];
  constructor(
     private location: Location,
     private apploadDataService: ApploadDataService,
     private SpinnerService: NgxSpinnerService) {
    this.router = location.path();
  }

  router: string;
  ngOnInit(): void {
    this.SpinnerService.show();
    this.apploadDataService.getApplicationLoadData().subscribe(result => {
      result.categories.forEach(element => {
        this.catagories.push(element);
      });

      result.distributorLeads.forEach(element => {
        this.distributorLeads.push(element);
      });

      this.SpinnerService.hide();
    });
  }

}
