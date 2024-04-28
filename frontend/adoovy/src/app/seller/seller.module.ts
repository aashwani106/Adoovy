import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerHeaderComponent } from './seller-layout/seller-header/seller-header.component';
import { SellerFooterComponent } from './seller-layout/seller-footer/seller-footer.component';
// import { SellerSidebarComponent } from './seller-layout/seller-sidebar/seller-sidebar.component';



@NgModule({
  declarations: [
    SellerHeaderComponent,
    SellerFooterComponent,

  ],
  imports: [
    CommonModule
  ]
})
export class SellerModule { }
