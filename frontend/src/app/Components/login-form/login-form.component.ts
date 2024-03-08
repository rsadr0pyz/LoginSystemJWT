import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginDto } from '../../Dtos/LoginDto';
import { UserLoginService } from '../../Services/user-login.service';
import { CommonModule } from '@angular/common';

@Component({
        selector: 'app-login-form',
        standalone: true,
        imports: [CommonModule, ReactiveFormsModule, RouterModule],
        templateUrl: './login-form.component.html',
        styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
        loginForm = new FormGroup({

                login: new FormControl("", {
                        nonNullable: true,
                        validators: [Validators.required]
                }),
                password: new FormControl("", {
                        nonNullable: true,
                        validators: [Validators.required]
                })

        })

        constructor(private loginService: UserLoginService, private router: Router) { }


        displayLoginError: boolean = false

        OnSubmit(): void {
                if (this.loginForm.valid) {
                        let loginObj: LoginDto = {
                                login: this.loginForm.controls["login"].value,
                                password: this.loginForm.controls["password"].value,
                        }

                        this.loginService.login(loginObj).then(succeed => {
                                if (succeed) {
                                        this.displayLoginError = false;
                                        this.router.navigate(["/home"]);
                                } else {
                                        this.displayLoginError = true;
                                }

                        })
                }
        }
}
