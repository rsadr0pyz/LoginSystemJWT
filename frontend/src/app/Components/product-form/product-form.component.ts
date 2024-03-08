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
                        price: new FormControl<number>(this.baseProduct.price, {
                                nonNullable: true,
                                validators: [Validators.required, Validators.pattern("^[0-9]*\.[0-9]*")]
                        }),
                        amount: new FormControl<number>(this.baseProduct.amount, {
                                nonNullable: true,
                                validators: [Validators.required, Validators.pattern("^[0-9]*")]
                        }),

                })
        }

        onSubmit(): void {

                if (this.productForm.valid && this.productForm.dirty) {
                        let newProduct: ProductDto = {
                                name: this.productForm.controls["name"].value,
                                description: this.productForm.controls["description"].value,
                                price: parseFloat(this.productForm.controls["price"].value),
                                amount: parseInt(this.productForm.controls["amount"].value),
                        }       
                        newProduct.price = Number.parseFloat(newProduct.price.toFixed(4));

                        this.productForm.markAsPristine();

                        this.onSubmitEvent.emit(newProduct);
                }
        }
}
