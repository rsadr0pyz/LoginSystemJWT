import { Injectable, OnInit } from '@angular/core';
import { LoginDto } from '../Dtos/LoginDto';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Environment } from '../../environment/Environment';
import { LoginResponseDto } from '../Dtos/LoginResponseDto';
import { Observable, ObservableInput, catchError, firstValueFrom, lastValueFrom, map, of, tap } from 'rxjs';
import { LoggedUserDto } from '../Dtos/LoggedUserDto';
import { JwtService } from './jwt.service';
import { JwtPayloadDto } from '../Dtos/JwtPayloadDto';




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


        private _loggedUser ?: LoggedUserDto;

        public get loggedUser(): LoggedUserDto | undefined{
                return this._loggedUser;
        }

        private set loggedUser(value: LoggedUserDto) {
                this._loggedUser = value;
        }

        private readonly authUrl = `${Environment.ApiBaseUrl}/auth`;

        constructor(private http: HttpClient, private jwtService: JwtService) { 
                let token = window.localStorage.getItem("loginToken");
                if(token != null){
                        this.loginToken = token;
                        this.loadPayload();
                }
        }

        public async login(loginDto: LoginDto): Promise<boolean> {
                let gotToken = await lastValueFrom(this.http.post<LoginResponseDto>(`${this.authUrl}/login`, loginDto)
                                        .pipe(
                                                tap(res =>{
                                                        this.loginToken = res.token
                                                        window.localStorage.setItem("loginToken", res.token);
                                                }),
                                                map(() => true),
                                                catchError(() => of(false)),
                                        )
                                );
                
                let succeed = gotToken && this.loadPayload();                             
                return succeed;
        }

        public logOut(): void{
                this.loginToken = "";
                window.localStorage.removeItem("loginToken");
        }

        public get isLoggedIn(): boolean {
                return this.loginToken.length > 0;
        }

        private loadPayload(): boolean{
                let payload = this.jwtService.decodePayload<JwtPayloadDto>(this.loginToken);

                if(payload != null){
                        this.loggedUser = payload;
                        return true;
                }else{
                        return false;
                }
        }

}
