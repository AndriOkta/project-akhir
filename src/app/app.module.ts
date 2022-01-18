import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { DivisionComponent } from './division/division.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { HttpClientModule } from '@angular/common/http';
import { TambahdataComponent } from './tambahdata/tambahdata.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppMenuComponent,
    DivisionComponent,
    DashboardComponent,
    AppFooterComponent,
    TambahdataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
