import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RequestCallbackComponent } from './components/request-callback/request-callback.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  {path: 'requestcallback', component: RequestCallbackComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
