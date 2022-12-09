import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';



@NgModule({
  declarations: [
    ViewsComponent
  ],
  imports: [
    CommonModule,
    DashboardModule
  ],
  exports: [
    ViewsComponent
  ]
})
export class ViewsModule { }
