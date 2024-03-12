import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Environment } from "../../environment/Environment";
import { UserLoginService } from "./user-login.service";
import { Observable, catchError, map, of } from "rxjs";
import { ProductDto } from "../Dtos/ProductDto";
import { Product } from "../Models/Product";


@Injectable({
        providedIn: 'root'
})
export class ProductsService{

        private readonly apiBaseUrl = `${Environment.ApiBaseUrl}/api/products`;

        constructor(private http: HttpClient, private loginService: UserLoginService) {}

        public getAll(): Observable<Product[]>{
                var reqHeader = new HttpHeaders({ 
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer' + this.loginService.loginToken
                });

                return this.http.get<Product[]>(`${this.apiBaseUrl}/all`, {headers: reqHeader})
        }

        public update(product: Product){
                var reqHeader = new HttpHeaders({ 
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer' + this.loginService.loginToken
                });

                this.http.post(`${this.apiBaseUrl}/update/${product.id}`, product, {headers: reqHeader}).subscribe();
        }

        public register(product: ProductDto): Observable<Product>{
                var reqHeader = new HttpHeaders({ 
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer' + this.loginService.loginToken
                });

                return this.http.post<Product>(`${this.apiBaseUrl}/register`, product, {headers: reqHeader});
        }
}