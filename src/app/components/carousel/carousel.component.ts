import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() distributorLeads: any[] = [];

  constructor(
    config: NgbCarouselConfig,
    public dialog: MatDialog) {
    config.interval = 50000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
    config.showNavigationArrows = false;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
  }

  openDialog(componentName): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      disableClose: true,
      width: componentName !== 'login' ? '750px' : '550px',
      data: componentName,
      panelClass: 'full-width-dialog',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }


  openDistibutorsLeadData(id: number): void {
    if (!sessionStorage.getItem('user')) {
      this.openDialog('login');
    } else {
      const distributorLeadsArr = [];
      this.distributorLeads.forEach(element => {
        element.forEach(item => {
          distributorLeadsArr.push(item);
        });
      });

      const lead = distributorLeadsArr.find(d => d.id === id);
      if (lead) {
        sessionStorage.setItem('lead', JSON.stringify(lead));
        this.openDialog('distributorLeadsData');
      }
    }
  }
}
