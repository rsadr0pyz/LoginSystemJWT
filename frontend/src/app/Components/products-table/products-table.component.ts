import { Component, Input } from '@angular/core';
import { DataTableComponent } from '../data-table/data-table.component';
import { ProductRowViewComponent } from './row-view/product-row-view';
import { ProductDto } from '../../Dtos/ProductDto';

@Component({
  selector: 'app-products-table',
  standalone: true,
  imports: [DataTableComponent],
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.css'
})
export class ProductsTableComponent {
  
  @Input()
  productList: ProductDto[] = [];

  validKeys: (keyof ProductDto)[] = ["name", "price", "amount"];

  rowView = ProductRowViewComponent;
  
}
