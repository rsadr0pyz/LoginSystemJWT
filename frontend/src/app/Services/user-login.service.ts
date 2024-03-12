import { Injectable } from '@angular/core';
import { LoginDto } from '../Dtos/LoginDto';
import { HttpClient } from '@angular/common/http';
import { Environment } from '../../environment/Environment';
import { LoginResponseDto } from '../Dtos/LoginResponseDto';
import { catchError, lastValueFrom, map, of, tap } from 'rxjs';
import { User } from '../Models/User';
import { JwtService } from './jwt.service';
import { JwtPayloadUser } from '../Models/JwtPayloadDto';




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


        private _loggedUser ?: User;

        public get loggedUser(): User | undefined{
                return this._loggedUser;
        }

        private set loggedUser(value: User) {
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
                let payload = this.jwtService.decodePayload<JwtPayloadUser>(this.loginToken);

                if(payload != null){
                        this.loggedUser = payload;
                        return true;
                }else{
                        return false;
                }
        }

}
