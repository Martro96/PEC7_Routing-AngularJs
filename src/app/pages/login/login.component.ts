import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { UserService } from '../../services/user.service';
import { UserInterface } from '../../components/user/user-interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
  
})
export class LoginComponent {
  loginForm: FormGroup;

    constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { 
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]], 
        password: ['', [
          Validators.required, 
          Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
        ]], 
        submitted: false
      })}

    
    loginUser(): void {
      if (this.loginForm.valid) {
        const credentials: Partial<UserInterface> = this.loginForm.value; //Se usa Partial para permitir que el usuario tenga sólo algunas de las propiedades, no obligatoriamente todas las recogdas en la interfaz
        this.userService.authenticate(credentials.email!, credentials.password!).subscribe({
          next: (response) => { 
            localStorage.setItem('authToken', response.token);
            this.router.navigate(['/']);
          },
          error: (err) => {
            console.error('Error al autenticar:', err);
          },
        });
      } else {
        console.log('Formulario inválido');
      }
    }

    onSubmit(): void { 
      this.loginUser();
    }
}
