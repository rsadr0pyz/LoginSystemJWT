import { Component, OnInit } from '@angular/core';
import { Product } from '../../Models/Product';
import { ProductsService } from '../../Services/products.service';
import { ProductsTableComponent } from '../products-table/products-table.component';
import { ProductFormComponent } from '../product-form/product-form.component';
import { ProductDto } from '../../Dtos/ProductDto';

@Component({
        selector: 'app-product-management-tab',
        standalone: true,
        imports: [ProductsTableComponent, ProductFormComponent],
        templateUrl: './product-management-tab.component.html',
        styleUrl: './product-management-tab.component.css'
})
export class ProductManagementTabComponent implements OnInit {

        products: Product[] = [];

        state: "table" | "form" = "table";

        constructor(private productsService: ProductsService){}

        ngOnInit(): void {
                this.productsService.getAll().subscribe(res => {
                        this.products = res;
                })
        }

        onFormSubmit(productDto: ProductDto){
                this.productsService.register(productDto).subscribe((product) =>{
                        this.products.push(product);
                });
                this.state = "table"
        }
}
