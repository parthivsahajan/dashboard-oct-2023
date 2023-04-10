import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WidgetChartComponent } from './widget-chart/widget-chart.component';

const routes: Routes = [
// to radirect automatically from  localhost:4200 to contactManager
  {
      path:'',redirectTo:'/dashboard/admin',pathMatch:'full'

  },
  {
    path:'dashbord/admin',component:DashboardComponent

  },
  {
    path:'dashboard/card',component:WidgetChartComponent

  },
  {
    path:'dashboard/chart',component:WidgetChartComponent

  },
  {
    path:'dashboard/table',component:WidgetChartComponent

  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
