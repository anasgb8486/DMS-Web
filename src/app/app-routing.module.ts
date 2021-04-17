import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointDistributorComponent } from './components/appoint-distributor/appoint-distributor.component';
import { BecomeDistributorComponent } from './components/become-distributor/become-distributor.component';
import { HomeComponent } from './components/home/home.component';
import { KnowMoreComponent } from './components/know-more/know-more.component';
import { PostRequirementComponent } from './components/post-requirement/post-requirement.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RequestCallbackComponent } from './components/request-callback/request-callback.component';
import { SearchResultCategoryComponent } from './components/search-result-category/search-result-category.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  {path: 'requestcallback', component: RequestCallbackComponent},
  {path: 'postrequirements', component: PostRequirementComponent},
  {path: 'appointDistributor', component: AppointDistributorComponent},
  {path: 'becomeDistributor', component: BecomeDistributorComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'searchresultcategory', component: SearchResultCategoryComponent},
  {path: 'knowmore', component: KnowMoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
