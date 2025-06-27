import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  registerForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.registerForm = this.fb.group({
      username: '',
      email: '',
      password: '',
      rePass: '',
    });
  }

  onSubmit() {
    this.http
      .post('http://localhost:3000/users/register', this.registerForm.value)
      .subscribe({
        next: () => {
          console.log('Registration succesfull!');
          this.router.navigate(['/users/login']);
        },
        error: (err) => {
          console.error('registration failed', err);
        },
      });
  }
}
