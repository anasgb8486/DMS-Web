import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MasterDataService } from 'src/app/services/master-data.service';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public catagories: any[] = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private masterDataService: MasterDataService,
    private SpinnerService: NgxSpinnerService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.SpinnerService.show();
    this.masterDataService.getAllCategories().subscribe(result => {
      if (result){
        result.forEach((collection) => {
          collection.forEach(element => {
            this.catagories.push({id: element.id, name: element.name});
          });
        });
      }
      this.SpinnerService.hide();
    });
  }

  searchCategory(): void{
    this.router.navigate(['./searchresultcategory']);
  }

  onKeyDownEvent(event: any): void {
    this.router.navigate(['/searchresultcategory'], { relativeTo: this.route });
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
}
