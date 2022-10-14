import { Component, OnInit, Inject } from '@angular/core';
import { Producto } from '../../../Models/Producto';
import { ProductService } from '../../../Service/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
})
export class ProductsListComponent implements OnInit {

  public productos: Producto[];
  public _productService: ProductService;
  public searchText: string;
 
  constructor(private productService: ProductService) {
    this._productService = productService;
  }

  ngOnInit() {
    this.LoadData();
  }

  async LoadData() {
    this.productos = await this._productService.GetAllProducts();
  } 

  async OnDeleteProduct(ProductosId: number) {
    await this._productService.DeleteProduct(ProductosId);
    this.LoadData();
  }

  onSearch() {
    const resSearch = this.productos.filter(item => JSON.stringify(item).toLowerCase().trim().match(this.searchText.toLowerCase().trim()));
    this.productos = resSearch;
    if (this.searchText == "") this.LoadData();
  }
}

