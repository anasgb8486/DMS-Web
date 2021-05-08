import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-searchbar-distributor-leads',
  templateUrl: './searchbar-distributor-leads.component.html',
  styleUrls: ['./searchbar-distributor-leads.component.scss']
})
export class SearchbarDistributorLeadsComponent implements OnInit {

  @Output() toggleSearchBar: EventEmitter<string> = new EventEmitter<string>();
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  searchDistributorsLeads(): void{
    this.onSearchClickClickEvent();
    this.router.navigate(['./distributorleadsresult']);
  }

  onKeyDownEvent(event: any): void {
    this.router.navigate(['/distributorleadsresult'], { relativeTo: this.route });
  }

  onSearchClickClickEvent(): void{
    return this.toggleSearchBar.emit('distributorleadsresult');
  }

}
