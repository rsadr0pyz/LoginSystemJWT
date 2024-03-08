import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductDto } from '../../../Dtos/ProductDto';
import { ProductFormComponent } from '../../product-form/product-form.component';
import { Product } from '../../../Models/Product';
import { ProductsService } from '../../../Services/products.service';


@Component({
  selector: 'app-row-view',
  standalone: true,
  imports: [ProductFormComponent],
  templateUrl: './product-row-view.component.html',
  styleUrl: './product-row-view.component.css'
})
export class ProductRowViewComponent {

  @Input({alias: "data"})
  product !: Product;
  
  @Output()
  newProductSubmited = new EventEmitter<Product>()

  constructor(private productService: ProductsService) {}

  onSubmitProductForm(productDto: ProductDto){
    let newProduct: Product = Product.fromDto(this.product.id, productDto);
    Object.assign(this.product, newProduct); //Changing it this way makes so that the parent also get the changes.

    this.productService.update(this.product);
  }
  
}
