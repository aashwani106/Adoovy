import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerHeaderComponent } from './seller-layout/seller-header/seller-header.component';
import { SellerFooterComponent } from './seller-layout/seller-footer/seller-footer.component';
import { SellerTableComponent } from './seller-layout/seller-table/seller-table.component';
import { AddWebsiteComponent } from './seller-layout/add-website/add-website.component';
// import { SellerSidebarComponent } from './seller-layout/seller-sidebar/seller-sidebar.component';



@NgModule({
  declarations: [
    SellerHeaderComponent,
    SellerFooterComponent,
    AddWebsiteComponent
    

  ],
  imports: [
    CommonModule
  ]
})
export class SellerModule { }
