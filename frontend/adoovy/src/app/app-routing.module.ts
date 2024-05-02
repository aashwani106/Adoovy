import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './home/landingpage/landingpage.component';
import { SignupComponent } from './home/signup/signup.component';
import { HomeLayoutComponent } from './home/home-layout/home-layout.component';
import { BuyerLayoutComponent } from './buyer/buyer-layout/buyer-layout.component';
import { SellerLayoutComponent } from './seller/seller-layout/seller-layout.component';

const routes: Routes = [
  { path: " ", component: HomeLayoutComponent, loadChildren: () => import('./home/home-layout/home.module').then(m => m.HomeModule) },
  { path: "buyer", component: BuyerLayoutComponent, loadChildren: () => import('./buyer/buyer-layout/buyer.module').then(m => m.BuyerModule) },
  { path: "seller", component: SellerLayoutComponent, loadChildren: () => import('./seller/seller-layout/seller.module').then(m => m.SellerModule) },


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
