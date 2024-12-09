import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ConnexionPage } from './connexion.page';
import { ConnexionPageRoutingModule } from './connexion-routing.module';
import { LoginComponent } from '../login/login.component';  // Import the standalone LoginComponent

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ConnexionPageRoutingModule,
    LoginComponent,  // Import it here, not declare it
  ],
  declarations: [
    ConnexionPage,   // Only declare ConnexionPage here
  ],
})
export class ConnexionPageModule { }
