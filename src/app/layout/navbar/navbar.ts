import { Component } from '@angular/core';
import { ButtonComponent } from "../../shared/ui/button";

@Component({
  selector: 'app-navbar',
  imports: [ButtonComponent],
  templateUrl: './navbar.html',
  standalone: true
})
export class Navbar {
  toggleDarMode(){
    document.documentElement.classList.toggle('dark')
  }
}
