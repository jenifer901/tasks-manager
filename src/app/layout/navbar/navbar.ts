import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../shared/ui/button';
import { AuthService } from '../../core/service/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [ButtonComponent],
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
