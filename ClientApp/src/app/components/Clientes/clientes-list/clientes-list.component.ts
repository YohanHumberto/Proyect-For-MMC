import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
})
export class ClientesListComponent implements OnInit {

  public clientes: Cliente[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Cliente[]>(baseUrl + 'clientes').subscribe(result => {
      this.clientes = result;
    }, error => console.error(error));
  }
  ngOnInit() {
  }

}

interface Cliente {
  ClientesId: number;
  Nombre: string;
  Apellido: string;
  Email: string;
  Estado: boolean;
}
