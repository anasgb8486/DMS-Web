import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointDistributorComponent } from './components/appoint-distributor/appoint-distributor.component';
import { BecomeDistributorComponent } from './components/become-distributor/become-distributor.component';
import { DistributorLeadsResultsComponent } from './components/distributor-leads-results/distributor-leads-results.component';
import { HomeComponent } from './components/home/home.component';
import { KnowMoreComponent } from './components/know-more/know-more.component';
import { PostRequirementComponent } from './components/post-requirement/post-requirement.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RequestCallbackComponent } from './components/request-callback/request-callback.component';
import { SearchResultCategoryComponent } from './components/search-result-category/search-result-category.component';
import { SearchbarDistributorLeadsComponent } from './components/searchbar-distributor-leads/searchbar-distributor-leads.component';


const routes: Routes = [
<<<<<<< HEAD
  { path: 'home', component: HomeComponent },
  { path: 'requestcallback', component: RequestCallbackComponent },
  { path: 'postrequirements', component: PostRequirementComponent },
  { path: 'appointDistributor', component: AppointDistributorComponent },
  { path: 'becomeDistributor', component: BecomeDistributorComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'searchresultcategory', component: SearchResultCategoryComponent },
  { path: 'knowmore', component: KnowMoreComponent },
  { path: 'distributorleads', component: SearchbarDistributorLeadsComponent },
  { path: 'distributorleadsresult', component: DistributorLeadsResultsComponent },

=======
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  {path: 'requestcallback', component: RequestCallbackComponent},
  {path: 'postrequirements', component: PostRequirementComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'searchresultcategory', component: SearchResultCategoryComponent},
  {path: 'knowmore', component: KnowMoreComponent}
>>>>>>> 2ee04e1f400a45bb25a37a4d9dc1bb6cadfb08c9
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
