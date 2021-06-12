import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {
  @Output() toggleSearchBar: EventEmitter<string> = new EventEmitter<string>();

  public displaySearch = true;

  constructor(
    public dialog: MatDialog,
    config: NgbCarouselConfig) {
      config.interval = 5000;
      config.wrap = true;
      config.keyboard = false;
      config.pauseOnHover = true;
      config.showNavigationIndicators = false;
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
      console.log('The dialog was closed');
    });
  }

  hideSearch(): void{
    this.displaySearch = false;
  }

  onNavBarClickEvent(navigationItemName): void{
    this.displaySearch = true;
    return this.toggleSearchBar.emit(navigationItemName);
  }
}
