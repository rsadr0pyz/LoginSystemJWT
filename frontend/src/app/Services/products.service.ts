import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Environment } from "../../environment/Environment";
import { UserLoginService } from "./user-login.service";
import { Observable } from "rxjs";
import { ProductDto } from "../Dtos/ProductDto";


@Injectable({
        providedIn: 'root'
})
export class ProductsService{

        private readonly apiBaseUrl = `${Environment.ApiBaseUrl}/api/products`;

        constructor(private http: HttpClient, private loginService: UserLoginService) {}

        public getAll(): Observable<ProductDto[]>{
                var reqHeader = new HttpHeaders({ 
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer' + this.loginService.loginToken
                });

                return this.http.get<ProductDto[]>(`${this.apiBaseUrl}/all`, {headers: reqHeader})

        }
}