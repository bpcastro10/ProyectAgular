import { Component } from '@angular/core';
// import { ProductTableComponent } from '../../components/product-table/product-table.component';
import { HeaderComponent } from '../../components/header/header.component';
import { ProductTableComponent } from '../../components/product-table/product-table.component';
ProductTableComponent
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [HeaderComponent, ProductTableComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

}

