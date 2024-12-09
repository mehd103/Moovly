import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfosPageRoutingModule } from './infos-routing.module';

import { InfosPage } from './infos.page';
import {NavbarComponent} from "../navbar/navbar.component";
import {ToolbarComponent} from "../toolbar/toolbar.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        InfosPageRoutingModule,
        NavbarComponent,
        ToolbarComponent
    ],
  declarations: [InfosPage]
})
export class InfosPageModule {}
