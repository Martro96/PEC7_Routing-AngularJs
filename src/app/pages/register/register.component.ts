import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { RegisterResponse } from '../../services/user.service';

// Validador personalizado para contraseñas
export function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;
  return password && confirmPassword && password === confirmPassword
    ? null
    : { passwordsDoNotMatch: true };
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { 
    // Crear el formulario reactivo con validaciones
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], 
      username: ['', [Validators.required]], // Agregado 'username' para capturar el nombre de usuario
      password: ['', [
        Validators.required, 
        Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
      ]],
      confirmPassword: ['', Validators.required],
    }, { validators: passwordMatchValidator });
  }

  // Método para registrar el usuario
  registerUser(): void {
    this.submitted = true;
    if (this.registerForm.valid) {
      const { email, username, password } = this.registerForm.value;
      console.log('Formulario válido:', this.registerForm.value); // Verifica los valores
      // Llamar al servicio de registro
      this.userService.register(username, password).subscribe({
        next: (response: RegisterResponse) => {
          localStorage.setItem('authToken', JSON.stringify(response.token));
          console.log('Usuario registrado correctamente:', response);
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.log('Error al registrar el usuario:', error);
        }
      });
  
      // Resetear el formulario después de la suscripción exitosa
      this.registerForm.reset();
      this.submitted = false;
    } else {
      console.log('Formulario inválido', this.registerForm.errors);
    }
  }

  // Método llamado cuando el formulario se envía
  onSubmit(): void {
    console.log('Formulario:', this.registerForm);
    console.log('Formulario válido:', this.registerForm.valid);
    if (this.registerForm.valid) {
      this.registerUser();
    } else {
      console.log('Formulario inválido');
    }  }
}
