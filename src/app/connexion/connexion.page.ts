import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-connexion',
  templateUrl: 'connexion.page.html',
  styleUrls: ['connexion.page.scss'],
})
export class ConnexionPage {
  alertButtons = ['Fermer'];

  constructor() {}
}
