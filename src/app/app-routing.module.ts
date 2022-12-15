import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertisementComponent } from './my/dashboard/advertisement/advertisement.component';
import { CurrentPlanComponent } from './my/dashboard/current-plan/current-plan.component';
import { DashboardComponent } from './my/dashboard/dashboard.component';
import { EmployeesComponent } from './my/dashboard/employees/employees.component';
import { GraphComponent } from './my/dashboard/graph/graph.component';
import { PropertiesComponent } from './my/dashboard/properties/properties.component';
import { RecentactivityComponent } from './my/dashboard/recentactivity/recentactivity.component';
import { StatsComponent } from './my/dashboard/stats/stats.component';
import { WidgetsComponent } from './my/dashboard/widgets/widgets.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },

  { path: 'widgets', component: WidgetsComponent },

  {
    path: 'dashboard',

    children: [
      { path: 'banner', component: AdvertisementComponent },
      { path: 'current', component: CurrentPlanComponent },
      { path: 'emp', component: EmployeesComponent },
      { path: 'graph', component: GraphComponent },
      { path: 'properties', component: PropertiesComponent },
      { path: 'stats', component: StatsComponent },
      {path: 'activity', component:RecentactivityComponent}
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
