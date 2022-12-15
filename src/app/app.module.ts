import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './my/header/header.component';
import { SidenavComponent } from './my/sidenav/sidenav.component';
import { DashboardComponent } from './my/dashboard/dashboard.component';
import { StatsComponent } from './my/dashboard/stats/stats.component';
import { CurrentPlanComponent } from './my/dashboard/current-plan/current-plan.component';
import { EmployeesComponent } from './my/dashboard/employees/employees.component';
import { GraphComponent } from './my/dashboard/graph/graph.component';
import { AdvertisementComponent } from './my/dashboard/advertisement/advertisement.component';
import { PropertiesComponent } from './my/dashboard/properties/properties.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Angular-Material------>
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule }from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';  
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { WidgetsComponent } from './my/dashboard/widgets/widgets.component';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { RecentactivityComponent } from './my/dashboard/recentactivity/recentactivity.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    DashboardComponent,
    StatsComponent,
    CurrentPlanComponent,
    EmployeesComponent,
    GraphComponent,
    AdvertisementComponent,
    PropertiesComponent,
    WidgetsComponent,
    RecentactivityComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    
    // Angular-Material------>  
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatTabsModule,
    MatProgressBarModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
