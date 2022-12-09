import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HightlightComponent } from './hightlight/hightlight.component';
import { NextStepComponent } from './next-step/next-step.component';
import { ResourceComponent } from './resource/resource.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

const components = [
    FooterComponent,
    HightlightComponent,
    NextStepComponent,
    ResourceComponent,
    ToolbarComponent
]

@NgModule({
  declarations: [
    DashboardComponent,
    ...components
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
