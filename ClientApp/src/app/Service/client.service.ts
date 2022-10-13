import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../Models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  public _http: HttpClient;
  public _baseUrl: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._http = http;
    this._baseUrl = baseUrl;
  }

  async GetAllClientes() {
    let res = await this._http.get<Cliente[]>(this._baseUrl + 'clientes').toPromise();
    return res;
  }

  async GetClientById(clientesId: number) {
    let res = await this._http.get<Cliente>(this._baseUrl + `clientes/${clientesId}`).toPromise();
    return res;
  }

  async AddCliente(Cliente: Cliente) {
    return await this._http.post<any>(this._baseUrl + `clientes`, Cliente).toPromise().then(result => {
      return true;
    }, error => { console.error(error); return false; });
  }

  async EditCliente(Cliente: Cliente) {
    return await this._http.put<any>(this._baseUrl + `clientes`, Cliente).toPromise().then(result => {
      return true;
    }, error => { console.error(error); return false; });
  }

  async DeleteCliente(clientesId: number) {
    return await this._http.delete<any>(this._baseUrl + `clientes/${clientesId}`).toPromise().then(result => {
      return true;
    }, error => { console.error(error); return false; });
  }

}
