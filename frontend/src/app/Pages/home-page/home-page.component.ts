import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../../Services/user-login.service';
import { RouterModule } from '@angular/router';
import { ProductDto } from '../../Dtos/ProductDto';
import { ProductsService } from '../../Services/products.service';
import { ProductsTableComponent } from '../../Components/products-table/products-table.component';
import { Product } from '../../Models/Product';
import { UserRole } from '../../Models/UserRole';
import { ProductManagementTabComponent } from '../../Components/product-management-tab/product-management-tab.component';
import { UserManagementTabComponent } from '../../Components/user-management-tab/user-management-tab.component';

@Component({
        selector: 'app-home-page',
        standalone: true,
        imports: [CommonModule, RouterModule, ProductManagementTabComponent, UserManagementTabComponent],
        templateUrl: './home-page.component.html',
        styleUrl: './home-page.component.css'
})
export class HomePageComponent{

        get isAdmin(){
                return this.loggedUser?.role == UserRole.ADMIN;
        }
        
        loggedUser = this.userLoginService.loggedUser;

        tabs: {tabName: string, comp: any}[] = [
                {tabName: "Products", comp: ProductManagementTabComponent},
                {tabName: "Users", comp: UserManagementTabComponent}
        ]

        selectedTab = 0;

        public get isLoggedIn() {
                return this.userLoginService.isLoggedIn;
        }

        constructor(private userLoginService: UserLoginService) { }


        logout(){
                this.userLoginService.logOut();
        }
}
