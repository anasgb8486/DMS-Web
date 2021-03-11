import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavigationbarComponent } from './shared/components/navigationbar/navigationbar.component';
import { RequestCallbackComponent } from './components/request-callback/request-callback.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { EnquiryService } from './services/enquiry.service';
import { PremiumBrandsComponent } from './components/premium-brands/premium-brands.component';
import { PostRequirementComponent } from './components/post-requirement/post-requirement.component';
import { DialogComponent } from './shared/components/dialog/dialog.component';
import { AskExpertsComponent } from './components/ask-experts/ask-experts.component';
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
    ToastrModule.forRoot()
  ],
  providers: [
    EnquiryService
  ],
  entryComponents: [ DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
