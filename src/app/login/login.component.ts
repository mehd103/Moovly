import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, ]
})
export class LoginComponent {
  username = '';
  password = '';
  constructor(private router: Router) {}
  onLogin() {
    console.log('Login attempted', this.username);
      this.router.navigate(['/moovlyhome']);
  }
}
