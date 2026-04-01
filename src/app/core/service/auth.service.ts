import { Injectable, computed, inject, signal } from '@angular/core';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../../../environments/enviroments';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSignal = signal<User | null>(null);

  user = computed(() => this.userSignal());

  isAuthenticated(): boolean {

    return !!localStorage.getItem('auth');
  };

  private api = inject(ApiService);
  private http = inject(HttpClient);
  private router = inject(Router)

  saveSession(data: any){

    localStorage.setItem(
      'auth',
      JSON.stringify(data)
    )
  }

  login(email: string, password: string) {
  
    return this.api.post('user/login', {email, password});
  }

  logout() {
    localStorage.removeItem('auth');
    this.router.navigate(['login']);
  }
}
