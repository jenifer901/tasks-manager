import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  standalone: true,
})
export class Navbar {
  auth = inject(AuthService);

  logout() {
    this.auth.logout();
  }

  toggleDarMode() {
    // TODO: hacer funcionalidad y poner un emoji
    document.documentElement.classList.toggle('dark');
  }
}
