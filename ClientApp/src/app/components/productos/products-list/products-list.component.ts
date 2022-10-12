import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
})
export class ProductsListComponent implements OnInit {

  public productos: Producto[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Producto[]>(baseUrl + 'productos').subscribe(result => {
      this.productos = result;
    }, error => console.error(error));
  }

  ngOnInit() {
  }

}

interface Producto {
  ProductosId: number;
  Nombre: string;
  Tipo: string;
  Cantidad: number;
  Estado: boolean;
}
