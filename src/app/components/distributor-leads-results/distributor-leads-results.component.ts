import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-distributor-leads-results',
  templateUrl: './distributor-leads-results.component.html',
  styleUrls: ['./distributor-leads-results.component.css']
})
export class DistributorLeadsResultsComponent implements OnInit {

  @Input() leads: any[];
  @Input() catagoryName: string; 

  constructor() { }

  ngOnInit(): void {
  }

}
