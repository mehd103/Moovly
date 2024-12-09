import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignalerPageRoutingModule } from './signaler-routing.module';

import { SignalerPage } from './signaler.page';
import {ToolbarComponent} from "../toolbar/toolbar.component";
import {NavbarComponent} from "../navbar/navbar.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignalerPageRoutingModule,
    ToolbarComponent,
    NavbarComponent
  ],
  declarations: [SignalerPage]
})
export class SignalerPageModule {}
