import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  @Input() catagories: any[] = [];

  public displayAll = false;

  public imagePath: SafeResourceUrl;
  constructor(private _sanitizer: DomSanitizer) {

    this.imagePath = ''; // this._sanitizer.bypassSecurityTrustResourceUrl(this.catagories[0][0].image);
  }


  ngOnInit(): void {}

  toggleDisplayAll(): void{
    this.displayAll = !this.displayAll;
  }

}
