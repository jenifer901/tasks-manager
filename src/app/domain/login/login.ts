import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/service/auth.service';
import { Router } from '@angular/router';
import { ButtonComponent } from "../../shared/ui/button";
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone: true
})
export class Login {

loading = false;
error = '';
showPassword = false;

private auth = inject(AuthService);
private router = inject(Router);
private fb = inject(FormBuilder);

form = this.fb.nonNullable.group({
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(4)]],
})

togglePassword() {
  this.showPassword = !this.showPassword;
}

login() {

if(this.form.invalid) {
  this.form.markAllAsTouched();
} else {
  this.loading = true;
  this.error = '';

  const { email, password } = this.form.getRawValue();
  console.log(email)
   this.auth.login(email, password).subscribe({

    next: (res: any) => {
      this.auth.saveSession(res)
      this.router.navigate(['/'])
    }, 
    error: () => {
      this.error = 'Login incorrecto'
    }
  })
}

}

}
