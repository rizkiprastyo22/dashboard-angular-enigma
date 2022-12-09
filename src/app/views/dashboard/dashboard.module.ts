import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardBannerComponent } from './banner/dashboard-banner.component';
import { DashboardNewsletterComponent } from './newsletter/dashboard-newsletter.component';
import { DashboardServiceComponent } from './service/dashboard-service.component';
import { DashboardAboutComponent } from './about/dashboard-about.component';
import { DashboardFaqComponent } from './faq/dashboard-faq.component';
import { DashboardInstructorsComponent } from './instructors/dashboard-instructors.component';
import { DashboardContactComponent } from './contact/dashboard-contact.component';

const components = [
    DashboardBannerComponent,
    DashboardNewsletterComponent,
    DashboardServiceComponent,
    DashboardAboutComponent,
    DashboardFaqComponent,
    DashboardInstructorsComponent,
    DashboardContactComponent
]

@NgModule({
  declarations: [
    DashboardComponent,
    ...components
    
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
