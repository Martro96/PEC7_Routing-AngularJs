import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { UserInterface } from '../user/user-interface'; 
import { Observable } from 'rxjs';

// Validador personalizado para contraseñas
export function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;
  return password === confirmPassword ? null : { passwordsDoNotMatch: true };
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private userService: UserService) { 
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], 
      password: ['', [
        Validators.required, 
        Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
      ]],
      confirmPassword: ['', Validators.required],
    }, { validators: passwordMatchValidator });
  }

  registerUser(): void {
    this.submitted = true;
    if (this.registerForm.valid) {
      const newUser: UserInterface = {
        ...this.registerForm.value,
        id: Date.now(),
      };
      this.userService.create(newUser).subscribe({
        next: (response) => console.log('Usuario registrado correctamente:', response),
        error: (err) => console.error('Error al registrar usuario:', err),
      });
      this.registerForm.reset();
      this.submitted = false;
    } else {
      console.log('Formulario inválido');
    }
  }

  onSubmit(): void { 
    this.registerUser();
  }
}
