import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DistributorService } from 'src/app/services/distributor.service';

@Component({
  selector: 'app-display-brand-enquiries',
  templateUrl: './display-brand-enquiries.component.html',
  styleUrls: ['./display-brand-enquiries.component.css']
})
export class DisplayBrandEnquiriesComponent implements OnInit {

  enquiries: any[];
  constructor(
    private _distributorService: DistributorService,
    private _spinnerService: NgxSpinnerService,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._spinnerService.show();
    const user = JSON.parse(sessionStorage.getItem('user'));

    this._distributorService.getBrandIdByUserName(user.username).subscribe((brandId) => {
      this._distributorService.getBrandEnquiriesByBrandId(brandId).subscribe((result) => {
        this.enquiries = result;
        this._spinnerService.hide();
      });
    });
  }
}
