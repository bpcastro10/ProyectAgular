import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { Api } from '../../service/api';

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent {
  searchText: string = '';
  pageSize: number = 10;
  currentPage: number = 1;
  selectedMenuId: string | null = null;

  showDeleteModal: boolean = false;
  productToDelete: Product | null = null;

  products: Product[] = [];

  constructor(private router: Router, private api: Api) {
    this.loadProducts();
  }

  loadProducts() {
    this.api.getAll().subscribe(products => {
      this.products = products;
    });
  }

  goToRegister() {
    this.router.navigate(['/agregar']);
  }

  get filteredProducts(): Product[] {
    const filtered = this.products.filter(product =>
      product.nombre.toLowerCase().includes(this.searchText.toLowerCase())
    );
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return filtered.slice(start, end);
  }

  get totalFilteredItems(): number {
    return this.products.filter(product =>
      product.nombre.toLowerCase().includes(this.searchText.toLowerCase())
    ).length;
  }

  get totalPages(): number {
    return Math.ceil(this.totalFilteredItems / this.pageSize);
  }

  changePage(delta: number): void {
    const nextPage = this.currentPage + delta;
    if (nextPage >= 1 && nextPage <= this.totalPages) {
      this.currentPage = nextPage;
    }
  }

  toggleMenu(id: string): void {
    this.selectedMenuId = this.selectedMenuId === id ? null : id;
  }

  edit(id: string): void {
    this.router.navigate(['/detail'], { queryParams: { id } });
  }

  openDeleteModal(product: Product): void {
    this.productToDelete = product;
    this.showDeleteModal = true;
    this.selectedMenuId = null;
  }

  closeDeleteModal(): void {
    this.showDeleteModal = false;
    this.productToDelete = null;
  }

  confirmDelete(): void {
    if (this.productToDelete) {
      this.api.delete(this.productToDelete.id).subscribe(() => {
        this.loadProducts();
        this.closeDeleteModal();
      });
    }
  }
}