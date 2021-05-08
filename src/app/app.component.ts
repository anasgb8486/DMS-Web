import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { DialogComponent } from './shared/components/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DMS-Web';
  router: string;

<<<<<<< HEAD
  flagToggleSearchBar = true;
  flagDistributorLeads = false;
  navigationItemName = 'home';

  constructor(public dialog: MatDialog, private location: Location, private _router: Router) {
    // this.router = location.path();
    this.router = _router.url;
  }
  ngOnInit(): void {
=======
  constructor(public dialog: MatDialog, private location: Location) { 
    // this.router = location.path(); 
    // console.log(this.router)
  }

  ngOnInit(): void {
    this.router = this.location.path(); 
    console.log(this.router)
>>>>>>> 2ee04e1f400a45bb25a37a4d9dc1bb6cadfb08c9
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

  NavigationBarItemClicked(flagValue: string): void{
    this.navigationItemName = flagValue;
    this.flagToggleSearchBar = (this.navigationItemName !== 'register');
    this.flagDistributorLeads = (this.navigationItemName === 'distributorsleads');
    console.log(this.flagToggleSearchBar);
  }

  displayRouterOutlet(flagName: string): void{
    this.navigationItemName = flagName;
  }
}
