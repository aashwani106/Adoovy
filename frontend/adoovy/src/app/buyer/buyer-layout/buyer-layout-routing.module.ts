import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyerLayoutComponent } from './buyer-layout.component';



const routes: Routes = [
  {path: "",component: BuyerLayoutComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerLayoutRoutingModule { }