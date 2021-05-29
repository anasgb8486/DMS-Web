import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-search-result-category',
  templateUrl: './search-result-category.component.html',
  styleUrls: ['./search-result-category.component.scss']
})
export class SearchResultCategoryComponent implements OnInit {

  constructor(
    config: NgbCarouselConfig,
    private router: Router,
    private SpinnerService: NgxSpinnerService) {
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
  }

  ngOnInit(): void {
  }

  openKnowMore(): void{
    this.router.navigate(['./knowmore']);
  }

}
