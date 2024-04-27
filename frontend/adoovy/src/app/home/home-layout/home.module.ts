import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from '../landingpage/landingpage.component';
import { SignupComponent } from '../signup/signup.component';
import { HomeLayoutComponent } from './home-layout.component';
import  {RouterModule } from '@angular/router'
import { homeLayoutRoutingModule } from './home-layout-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LandingpageComponent,
    SignupComponent,
    HomeLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    homeLayoutRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
