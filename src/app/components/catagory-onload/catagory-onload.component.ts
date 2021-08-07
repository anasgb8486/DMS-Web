import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToggleAllCatagoriesService } from 'src/app/services/toggle-all-catagories.service';

@Component({
  selector: 'app-catagory-onload',
  templateUrl: './catagory-onload.component.html',
  styleUrls: ['./catagory-onload.component.scss']
})
export class CatagoryOnloadComponent implements OnInit {

  @Input() catagoriesOnLoad: any[] = [];
  public displayAll = false;
  public message = '';

  constructor(
    private _router: Router,
    private toggleAllCatagoriesService: ToggleAllCatagoriesService) {
  }

  ngOnInit(): void {
    this.toggleAllCatagoriesService.currentApprovalStageMessage.subscribe(msg => this.displayAll = msg );
  }

  openAllRealtedBrands(catagoryId: number): void {
    if (catagoryId > 0) {
      this._router.navigate(['searchresultcategory', catagoryId]);
    }
  }
  toggleDisplayAll(): void {
    this.displayAll = !this.displayAll;    
    this.toggleAllCatagoriesService.updateDisplayAllCatagoriesFlag(this.displayAll);
  }

}
