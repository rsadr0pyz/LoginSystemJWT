import { Injectable } from '@angular/core';
import { LoginDto } from '../Dtos/LoginDto';
import { HttpClient } from '@angular/common/http';
import { Environment } from '../../environment/Environment';




@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  private _loginToken: string = "";

  public get loginToken() : string{
    return this._loginToken;
  }
  
  private set loginToken(value: string){
    this.loginToken = value;
  }

  private readonly authUrl = `${Environment.ApiBaseUrl}/auth`;

  constructor(private http: HttpClient) { }

  public login(loginDto: LoginDto): void{
    this.http.post<string>(`${this.authUrl}/login`, loginDto).subscribe(token => this.loginToken = token);
  }


}
