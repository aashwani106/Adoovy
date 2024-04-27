import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './home/landingpage/landingpage.component';
import { SignupComponent } from './home/signup/signup.component';
import { HomeLayoutComponent } from './home/home-layout/home-layout.component';

const routes: Routes = [
  { path: " ", component: HomeLayoutComponent, loadChildren: () => import('./home/home-layout/home.module').then(m => m.HomeModule) },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
