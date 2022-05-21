import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingComponent } from './landing/landing.component';
import { AuthModule } from '../auth/auth.module';
import { MenuTopComponent } from '../auth/components/menu-top/menu-top.component';


@NgModule({
  declarations: [
    LandingComponent,
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    AuthModule
  ]
})
export class LandingPageModule { }
