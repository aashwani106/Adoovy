import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerHeaderComponent } from './seller-header/seller-header.component';
import { SellerFooterComponent } from './seller-footer/seller-footer.component';
import { SellerSidebarComponent } from './seller-sidebar/seller-sidebar.component';
import { SellerLayoutComponent } from './seller-layout.component';
import { SellerLayoutRoutingModule } from './seller-layout-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SellerDashboardComponent } from '../seller-dashboard/seller-dashboard.component';
import { SellerWebsitesComponent } from '../seller-websites/seller-websites.component';
// import { SellerSidebarComponent } from './seller-layout/seller-sidebar/seller-sidebar.component';



@NgModule({
  declarations: [
    SellerHeaderComponent,
    SellerFooterComponent,
    SellerSidebarComponent,
    SellerLayoutComponent,
    SellerDashboardComponent,
    SellerWebsitesComponent
  ],
  imports: [
    CommonModule,
    SellerLayoutRoutingModule,
    NgxSpinnerModule,
  ],
  exports: [
    SellerSidebarComponent,
    SellerLayoutComponent
  ],
})
export class SellerModule { }
