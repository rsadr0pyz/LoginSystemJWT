import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginDto } from '../../Dtos/LoginDto';
import { ProductDto } from '../../Dtos/ProductDto';

@Component({
        selector: 'app-product-form',
        standalone: true,
        imports: [CommonModule, ReactiveFormsModule],
        templateUrl: './product-form.component.html',
        styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnInit {

        @Input()
        baseProduct: ProductDto = {
                name: "",
                description: "",
                price: 0,
                amount: 0
        };

        @Output()
        onSubmitEvent = new EventEmitter<ProductDto>();

        productForm !: FormGroup;


        ngOnInit(): void {
                this.productForm = new FormGroup({
                        name: new FormControl(this.baseProduct.name, {
                                nonNullable: true,
                                validators: [Validators.required]
                        }),
                        description: new FormControl(this.baseProduct.description, {
                                nonNullable: true,
                                validators: [Validators.required]
                        }),
                        price: new FormControl(this.baseProduct.price, {
                                nonNullable: true,
                                validators: [Validators.required]
                        }),
                        amount: new FormControl(this.baseProduct.amount, {
                                nonNullable: true,
                                validators: [Validators.required]
                        }),

                })
        }

        onSubmit(): void {
                if (this.productForm.valid) {
                        let newProduct: ProductDto = {
                                name: this.productForm.controls["name"].value,
                                description: this.productForm.controls["description"].value,
                                price: this.productForm.controls["price"].value,
                                amount: this.productForm.controls["amount"].value,
                        }

                        this.onSubmitEvent.emit(newProduct);
                }
        }
}
