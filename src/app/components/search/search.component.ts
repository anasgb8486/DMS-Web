import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MasterDataService } from 'src/app/services/master-data.service';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  event$;
  public displaySearch: boolean;
  public catagories: any[] = [];

  // tslint:disable-next-line: no-inferrable-types
  public catagoryId: number = 0;
  public keyword: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private masterDataService: MasterDataService,
    private SpinnerService: NgxSpinnerService,
    public dialog: MatDialog) {
    this.event$ = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        // console.log(event.url);
        this.displaySearch = (event.url.replace('/', '') !== 'distributorleads');
      }
    });
  }


  ngOnInit(): void {
    this.SpinnerService.show();
    this.masterDataService.getAllCategories().subscribe(result => {
      if (result) {
        result.forEach((collection) => {
          collection.forEach(element => {
            this.catagories.push({ id: element.id, name: element.name });
          });
        });
      }
      this.SpinnerService.hide();
    });
  }



  searchCategory(): void {
    this.router.navigate(['./searchresultcategory/', {id: this.catagoryId, key: this.keyword}]);
  }

  onKeyDownEvent(event: any): void {
    this.searchCategory();
    // this.router.navigate(['/searchresultcategory;id=' + this.catagoryId + ';key= ' + this.keyword], { relativeTo: this.route });
  }

  openDialog(componentName): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      disableClose: true,
      width: '750px',
      data: componentName,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  setCatagoryId(catagoryId: number): void{    
    this.catagoryId = catagoryId;
  }

  ngOnDestroy(): void {
    this.event$.unsubscribe();
  }
}
