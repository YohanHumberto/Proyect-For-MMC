import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Orden } from '../Models/Orden';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  public _http: HttpClient;
  public _baseUrl: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._http = http;
    this._baseUrl = baseUrl;
  }

  async GetAllOrdenes() {
    let res = await this._http.get<Orden[]>(this._baseUrl + 'ordenes').toPromise();
    return res;
  }

  async GetOrdenById(ordenesId: number) {
    let res = await this._http.get<Orden>(this._baseUrl + `ordenes/${ordenesId}`).toPromise();
    return res;
  }

  async AddOrden(Orden: Orden) {
    return await this._http.post<any>(this._baseUrl + `ordenes`, Orden).toPromise().then(result => {
      return true;
    }, error => { console.error(error); return false; });
  }

  async EditOrden(Orden: Orden) {
    return await this._http.put<any>(this._baseUrl + `ordenes`, Orden).toPromise().then(result => {
      return true;
    }, error => { console.error(error); return false; });
  }

  async DeleteOrden(ordenesId: number) {
    return await this._http.delete<any>(this._baseUrl + `ordenes/${ordenesId}`).toPromise().then(result => {
      return true;
    }, error => { console.error(error); return false; });
  }
}
