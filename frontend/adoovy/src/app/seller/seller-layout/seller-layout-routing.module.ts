import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellerLayoutComponent } from './seller-layout.component';
import { SellerDashboardComponent } from '../seller-dashboard/seller-dashboard.component';
import { SellerWebsitesComponent } from '../seller-websites/seller-websites.component';


const routes: Routes = [
  { path: "seller-index", component: SellerDashboardComponent },
  { path: "websites", component: SellerWebsitesComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellerLayoutRoutingModule { }