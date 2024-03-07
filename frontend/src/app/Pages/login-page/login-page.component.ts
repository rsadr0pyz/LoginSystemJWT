import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginDto } from '../../Dtos/LoginDto';

@Component({
        selector: 'app-login-page',
        standalone: true,
        imports: [ReactiveFormsModule],
        templateUrl: './login-page.component.html',
        styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
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


        OnSubmit(): void {
                if (this.loginForm.valid) {
                        let loginObj: LoginDto = {
                                login: this.loginForm.controls["login"].value,
                                password: this.loginForm.controls["password"].value,
                        }
                        
                }
        }

}
