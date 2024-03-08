import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginDto } from '../../Dtos/LoginDto';
import { UserLoginService } from '../../Services/user-login.service';
import { CommonModule } from '@angular/common';

@Component({
        selector: 'app-login-form',
        standalone: true,
        imports: [CommonModule, ReactiveFormsModule],
        templateUrl: './login-form.component.html',
        styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

        @Output()
        onLogin = new EventEmitter();

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

        constructor(private loginService: UserLoginService) { }


        displayLoginError: boolean = false

        onSubmit(): void {
                if (this.loginForm.valid && this.loginForm.dirty) {
                        let loginObj: LoginDto = {
                                login: this.loginForm.controls["login"].value,
                                password: this.loginForm.controls["password"].value,
                        }

                        this.loginService.login(loginObj).then(succeed => {
                                if (succeed) {
                                        this.displayLoginError = false;
                                        this?.onLogin.emit();
                                } else {
                                        this.displayLoginError = true;
                                }

                        })
                        this.loginForm.markAsPristine();
                }
        }
}
