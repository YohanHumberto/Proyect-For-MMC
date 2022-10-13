import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../Models/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public _http: HttpClient;
  public _baseUrl: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._http = http;
    this._baseUrl = baseUrl;
  }

  async GetAllProducts() {
    let res = await this._http.get<Producto[]>(this._baseUrl + 'productos').toPromise();
    return res;
  }

  async GetProdutById(ProductosId: number) {
    let res = await this._http.get<Producto>(this._baseUrl + `productos/Details/${ProductosId}`).toPromise();
    return res;
  }

  async AddProduct(Product: Producto) {


    return await this._http.post<Producto>(this._baseUrl + `productos/Create`, Product).toPromise().then(result => {
      return true;
    }, error => { console.error(error); return false; });

  }

  async EditProduct(Product: Producto) {
    return await this._http.post<Producto>(this._baseUrl + `productos/Edit}`, Product).toPromise().then(result => {
      return true;
    }, error => { console.error(error); return false; });
  }

  async DeleteProduct(ProductosId: number) {
    return await this._http.delete<string>(this._baseUrl + `productos/Delete/${ProductosId}`).toPromise().then(result => {
      return true;
    }, error => { console.error(error); return false; });
  }

}
