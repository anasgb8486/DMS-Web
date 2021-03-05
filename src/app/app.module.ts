import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavigationbarComponent } from './shared/components/navigationbar/navigationbar.component';
import { RequestCallbackComponent } from './components/request-callback/request-callback.component';
import { NgxSpinnerModule } from 'ngx-spinner';

import {EnquiryService} from './services/enquiry.service';
import { PremiumBrandsComponent } from './components/premium-brands/premium-brands.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavigationbarComponent,
    RequestCallbackComponent,
    PremiumBrandsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
  ],
  providers: [
    EnquiryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
