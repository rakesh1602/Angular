import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './my/header/header.component';
import { LastFewTransactionComponent } from './my/last-few-transaction/last-few-transaction.component';
import { MainComponent } from './my/main/main.component';
import { SalesByCategoryComponent } from './my/sales-by-category/sales-by-category.component';
import { SideNavComponent } from './my/side-nav/side-nav.component';
import { TopThreeProductsComponent } from './my/top-three-products/top-three-products.component';
import { TopWidgetsComponent } from './my/top-widgets/top-widgets.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SalesByMonthComponent } from './my/sales-by-month/sales-by-month.component';
import { HighchartsChartModule } from 'highcharts-angular';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LastFewTransactionComponent,
    MainComponent,
    SalesByCategoryComponent,
    SideNavComponent,
    TopThreeProductsComponent,
    TopWidgetsComponent,
    SalesByMonthComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
