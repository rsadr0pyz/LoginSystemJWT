import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginDto } from '../../Dtos/LoginDto';
import { UserLoginService } from '../../Services/user-login.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { LoginFormComponent } from '../../Components/login-form/login-form.component';

@Component({
        selector: 'app-login-page',
        standalone: true,
        imports: [LoginFormComponent],
        templateUrl: './login-page.component.html',
        styleUrl: './login-page.component.css'
})
export class LoginPageComponent {


}
