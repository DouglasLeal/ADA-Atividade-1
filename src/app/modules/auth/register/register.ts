import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth-service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register implements OnInit {
  registerForm: FormGroup | null = null;
  senhasDiferentes: boolean = false;

  isError: boolean = false;
  errorMessage: string = '';
  isSuccess: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.initRegisterForm();
  }

  initRegisterForm() {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      address: this.fb.group({
        street: [''],
        number: [''],
        city: [''],
        state: [''],
        zip: ['']
      })
    }, { validators: this.senhasIguais });
  }

  senhasIguais(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { senhasDiferentes: true };
  }

  onSubmit() {
    if (this.registerForm!.valid) {
      const user = this.registerForm!.value;

      try {
        this.authService.registerUser(user);
        this.registerForm!.reset();
        this.isError = false;
        this.isSuccess = true;
      } catch (error: any) {
        this.isError = true;
        this.errorMessage = error.message;
      }
    } else {
      this.registerForm!.markAllAsTouched();
    }
  }
}
