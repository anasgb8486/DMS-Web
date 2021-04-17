import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { DialogComponent } from './shared/components/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DMS-Web';
  router: string;

  constructor(public dialog: MatDialog, private location: Location) { 
    this.router = location.path(); 
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
