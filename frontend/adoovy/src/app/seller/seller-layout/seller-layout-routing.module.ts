import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellerLayoutComponent } from './seller-layout.component';


const routes: Routes = [
  {path: "",component: SellerLayoutComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerLayoutRoutingModule { }