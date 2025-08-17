import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  loginForm: FormGroup | null = null;

  isError: boolean = false;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private router: Router
  ){}


  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm(){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(){
    if (this.loginForm!.valid) {
      const user = this.loginForm!.value;

      try {
        this.authService.login(user);
        this.isError = false;
        this.router.navigate(['/']);
      } catch (error: any) {
        this.isError = true;
        this.errorMessage = error.message;
      }
    } else {
      this.loginForm!.markAllAsTouched();
    }
  }
}
