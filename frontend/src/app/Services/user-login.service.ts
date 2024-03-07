import { Injectable, OnInit } from '@angular/core';
import { LoginDto } from '../Dtos/LoginDto';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Environment } from '../../environment/Environment';
import { LoginResponseDto } from '../Dtos/LoginResponseDto';
import { Observable, ObservableInput, catchError, firstValueFrom, lastValueFrom, map, of, tap } from 'rxjs';




@Injectable({
        providedIn: 'root'
})
export class UserLoginService{
        
        private _loginToken: string = "";

        public get loginToken(): string {
                return this._loginToken;
        }

        private set loginToken(value: string) {
                this._loginToken = value;
        }

        private readonly authUrl = `${Environment.ApiBaseUrl}/auth`;

        constructor(private http: HttpClient) { 
                let token = window.localStorage.getItem("loginToken");
                if(token != null){
                        this.loginToken = token;
                }
        }

        public async login(loginDto: LoginDto): Promise<boolean> {
                let succed = await lastValueFrom(this.http.post<LoginResponseDto>(`${this.authUrl}/login`, loginDto)
                                        .pipe(
                                                tap(res =>{
                                                        this.loginToken = res.token
                                                        window.localStorage.setItem("loginToken", res.token);
                                                }),
                                                map(() => true),
                                                catchError(() => of(false)),
                                        )
                                );
                
                return succed;
        }

        public logOut(): void{
                this.loginToken = "";
                window.localStorage.removeItem("loginToken");
        }

        public get isLoggedIn(): boolean {
                return this.loginToken.length > 0;
        }

}
