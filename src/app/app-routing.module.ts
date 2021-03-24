import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointDistributorComponent } from './components/appoint-distributor/appoint-distributor.component';
import { HomeComponent } from './components/home/home.component';
import { PostRequirementComponent } from './components/post-requirement/post-requirement.component';
import { RequestCallbackComponent } from './components/request-callback/request-callback.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  {path: 'requestcallback', component: RequestCallbackComponent},
  {path: 'postrequirements', component: PostRequirementComponent},
  {path: 'appointDistributor', component: AppointDistributorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
