import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoovlyhomePageRoutingModule } from './moovlyhome-routing.module';

import { MoovlyhomePage } from './moovlyhome.page';
import {ToolbarComponent} from "../toolbar/toolbar.component";
import {NavbarComponent} from "../navbar/navbar.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MoovlyhomePageRoutingModule,
        ToolbarComponent,
      NavbarComponent
    ],
  declarations: [MoovlyhomePage]
})
export class MoovlyhomePageModule {}
