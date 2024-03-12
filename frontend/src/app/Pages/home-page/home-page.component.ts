import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../../Services/user-login.service';
import { RouterModule } from '@angular/router';
import { ProductDto } from '../../Dtos/ProductDto';
import { ProductsService } from '../../Services/products.service';
import { ProductsTableComponent } from '../../Components/products-table/products-table.component';
import { Product } from '../../Models/Product';
import { UserRole } from '../../Models/UserRole';

@Component({
        selector: 'app-home-page',
        standalone: true,
        imports: [CommonModule, RouterModule, ProductsTableComponent],
        templateUrl: './home-page.component.html',
        styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

        products: Product[] = [];


        get isAdmin(){
                return this.userLoginService.loggedUser?.role == UserRole.ADMIN;
        }
        loggedUser = this.userLoginService.loggedUser;

        public get isLoggedIn() {
                return this.userLoginService.isLoggedIn;
        }

        constructor(private userLoginService: UserLoginService, private productsService: ProductsService) { }

        ngOnInit(): void {
                if (this.isLoggedIn) {
                        this.productsService.getAll().subscribe(res => {
                                this.products = res;
                        })
                }
        }

        logout(){
                this.userLoginService.logOut();
        }
}
