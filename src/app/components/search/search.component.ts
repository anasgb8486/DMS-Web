import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  searchCategory(): void{
    this.router.navigate(['./searchresultcategory']);
  }

  onKeyDownEvent(event: any): void {
    this.router.navigate(['/searchresultcategory'], { relativeTo: this.route });
  }
}
