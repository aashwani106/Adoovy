import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellerLayoutComponent } from './seller-layout.component';
import { AddWebsiteComponent } from './add-website/add-website.component'; // Make sure to add .component

const routes: Routes = [
  { path: '', component: SellerLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerLayoutRoutingModule { }
