import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { forkJoin } from 'rxjs';
import { DistributorService } from 'src/app/services/distributor.service';
import { MasterDataService } from 'src/app/services/master-data.service';

@Component({
  selector: 'app-searchbar-distributor-leads',
  templateUrl: './searchbar-distributor-leads.component.html',
  styleUrls: ['./searchbar-distributor-leads.component.scss']
})
export class SearchbarDistributorLeadsComponent implements OnInit {

  public catagories: any[] = [];
  public states: any[] = [];
  public cities: any[] = [];

  public selectedState = 0;
  public selectedcity = 0;
  public selectedCatagory = 0;
  public searchText = '';
  public selectedCatagoryName: string;
  public investmentAmount: number;
  public selectedInvestmentRange = 0;
  public resultDistributorLeads: any[];

  public investmentRange: any[] = [
    {id: 1, value: 'Rs. 5 Cr. and above'},
    {id: 2, value: 'Rs. 2 Cr. - Rs. 5Cr.'},
    {id: 3, value: 'Rs. 1 Cr. - Rs. 2Cr.'},
    {id: 4, value: 'Rs. 50 Lac. - Rs. 99 Lac.'},
    {id: 5, value: 'Rs. 30 Lac. - Rs. 50 Lac.'},
    {id: 6, value: 'Rs. 20 Lac. - Rs. 30 Lac.'},
    {id: 7, value: 'Rs. 10 Lac. - Rs. 20 Lac.'},
    {id: 7, value: 'Rs. 5 Lac. - Rs. 10 Lac.'},
    {id: 7, value: 'Rs. 2 Lac. - Rs. 5 Lac.'},
    {id: 7, value: 'Rs. 1 Lac. - Rs. 2 Lac.'},
    {id: 7, value: 'Rs. 50 k - Rs. 99 K'},
  ];

  @Output() toggleSearchBar: EventEmitter<string> = new EventEmitter<string>();
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private masterDataService: MasterDataService,
    private distributorService: DistributorService,
    private SpinnerService: NgxSpinnerService) { }

  public result = false;

  ngOnInit(): void {

    if (sessionStorage.getItem('catagories')) {
      const prodCatagories =  JSON.parse(sessionStorage.getItem('catagories'));
      prodCatagories.forEach(element => {
        element.forEach(item => {
          this.catagories.push(item);
        });
      });
    }

    this.SpinnerService.show();
    forkJoin(
      {
        catagories: this.masterDataService.getAllCategories(),
        states: this.masterDataService.getAllStates(),
        cities: this.masterDataService.getAllCities()
      }
    ).subscribe((result) => {
      this.SpinnerService.hide();

      result.catagories.forEach(element => {
        element.forEach(item => {
          if (!sessionStorage.getItem('catagories')){
            this.catagories.push(item);
          }
        });
      });

      result.states.forEach(item => {
        this.states.push(item);
      });

      result.cities.forEach(item => {
        this.cities.push(item);
      });
    });
  }


  searchDistributorsLeads(): void {
    const BrandFilterDto = { categoryId: +this.selectedCatagory, searchKeyword: this.searchText, stateId: +this.selectedState, cityId: +this.selectedcity, investmentAmount: +this.investmentAmount, requestType: 1 };
    this.distributorService.getDistributorsLeadsBySearchFilter(BrandFilterDto).subscribe((response) => {
      // console.log(response);
      if (response) {
        this.resultDistributorLeads = response;
        if (this.catagories.find(x => x.id == this.selectedCatagory)) {
          this.selectedCatagoryName = this.catagories.find(x => x.id == this.selectedCatagory).name;
        }
      }
    });
    this.result = true;
  }

  onKeyDownEvent(event: any): void {
    this.router.navigate(['/distributorleadsresult'], { relativeTo: this.route });
  }

  onSearchClickClickEvent(): void {
    return this.toggleSearchBar.emit('distributorleadsresult');
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    // 46 is .
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode != 46) {
      return false;
    }
    return true;

  }

}
