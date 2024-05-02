import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home-layout/home.module';
import  {RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './home/signin/signin.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SellerLayoutComponent } from './seller/seller-layout/seller-layout.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SellerSidebarComponent } from './seller/seller-layout/seller-sidebar/seller-sidebar.component';
import { SellerModule } from './seller/seller-layout/seller.module';
import { SellerDashboardComponent } from './seller/seller-dashboard/seller-dashboard.component';
import { SellerWebsitesComponent } from './seller/seller-websites/seller-websites.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    // SellerWebsitesComponent,
    // SellerDashboardComponent,
    // SellerLayoutComponent,
    // SellerSidebarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    SellerModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
