import { Component, Input } from '@angular/core';
import { ProductDto } from '../../../Dtos/ProductDto';
import { ProductFormComponent } from '../../product-form/product-form.component';

@Component({
  selector: 'app-row-view',
  standalone: true,
  imports: [ProductFormComponent],
  templateUrl: './product-row-view.component.html',
  styleUrl: './product-row-view.component.css'
})
export class ProductRowViewComponent {

  @Input({alias: "data"})
  product !: ProductDto;
  

  onSubmitProductForm(productDto: ProductDto){
    console.log(productDto);
  }
  
}
