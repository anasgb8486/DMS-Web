import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavigationbarComponent } from './shared/components/navigationbar/navigationbar.component';
import { RequestCallbackComponent } from './components/request-callback/request-callback.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { EnquiryService } from './services/enquiry.service';
import { RegistrationService } from './services/registration.service';
import { ApploadDataService } from '../app/services/appload-data.service';
import { GetbranddataService } from './services/getbranddata.service';
import { PremiumBrandsComponent } from './components/premium-brands/premium-brands.component';
import { PostRequirementComponent } from './components/post-requirement/post-requirement.component';
import { DialogComponent } from './shared/components/dialog/dialog.component';
import { AskExpertsComponent } from './components/ask-experts/ask-experts.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LoginComponent } from './shared/components/login/login.component';
import { AppointDistributorComponent } from './components/appoint-distributor/appoint-distributor.component';
import { BecomeDistributorComponent } from './components/become-distributor/become-distributor.component';
import { ReviewsliderComponent } from './components/reviewslider/reviewslider.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { SearchResultCategoryComponent } from '../app/components/search-result-category/search-result-category.component';
import { KnowMoreComponent } from '../app/components/know-more/know-more.component';
import { SearchbarDistributorLeadsComponent } from '../app/components/searchbar-distributor-leads/searchbar-distributor-leads.component';
import { DistributorLeadsResultsComponent } from '../app/components/distributor-leads-results/distributor-leads-results.component';
import { CatagoryOnloadComponent } from '../app/components/catagory-onload/catagory-onload.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavigationbarComponent,
    RequestCallbackComponent,
    PremiumBrandsComponent,
    PostRequirementComponent,
    DialogComponent,
    AskExpertsComponent,
    CategoriesComponent,
    CarouselComponent,
    FooterComponent,
    LoginComponent,
    AppointDistributorComponent,
    BecomeDistributorComponent,
    ReviewsliderComponent,
    RegistrationComponent,
    SearchResultCategoryComponent,
    KnowMoreComponent,
    SearchbarDistributorLeadsComponent,
    DistributorLeadsResultsComponent,
    CatagoryOnloadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    MatDialogModule,
    MatStepperModule,
    MatIconModule,
    ToastrModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    NgbModule
  ],
  providers: [
    EnquiryService,
    RegistrationService,
    ApploadDataService,
    GetbranddataService
  ],
  entryComponents: [ DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
