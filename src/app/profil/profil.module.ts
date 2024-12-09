import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilPageRoutingModule } from './profil-routing.module';

import { ProfilPage } from './profil.page';
import {ToolbarComponent} from "../toolbar/toolbar.component";
import {NavbarComponent} from "../navbar/navbar.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilPageRoutingModule,
    ToolbarComponent,
    NavbarComponent
  ],
  declarations: [ProfilPage]
})
export class ProfilPageModule {}
