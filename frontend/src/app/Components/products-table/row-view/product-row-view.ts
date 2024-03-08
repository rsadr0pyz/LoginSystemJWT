import { Component, Input } from '@angular/core';
import { ProductDto } from '../../../Dtos/ProductDto';

@Component({
  selector: 'app-row-view',
  standalone: true,
  imports: [],
  templateUrl: './product-row-view.component.html',
  styleUrl: './product-row-view.component.css'
})
export class ProductRowViewComponent {

  @Input({alias: "data"})
  product !: ProductDto;
  
  
}
