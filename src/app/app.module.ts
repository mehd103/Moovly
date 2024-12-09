import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import {FormsModule} from "@angular/forms";

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';


import { LoginComponent } from './login/login.component';
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {NavbarComponent} from "./navbar/navbar.component";

import {ConnexionPageModule} from "./connexion/connexion.module";

import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ConnexionPageModule,
    LoginComponent,
    ToolbarComponent,
    NavbarComponent
  ],
  providers: [
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  bootstrap: [AppComponent],
  exports: [
  ]
})
export class AppModule {}
