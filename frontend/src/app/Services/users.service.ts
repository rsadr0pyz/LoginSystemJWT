import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../Models/User";
import { Environment } from "../../environment/Environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserLoginService } from "./user-login.service";



@Injectable({
        providedIn: 'root'
})
export class UsersService{

        private readonly apiBaseUrl = `${Environment.ApiBaseUrl}/api/users`;

        constructor(private http: HttpClient, private loginService: UserLoginService){}

        public getAll(): Observable<User[]>{
                var reqHeader = new HttpHeaders({ 
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer' + this.loginService.loginToken
                });

                return this.http.get<User[]>(`${this.apiBaseUrl}/all`, {headers: reqHeader});
        }
}