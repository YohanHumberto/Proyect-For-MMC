import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ordenes-list',
  templateUrl: './ordenes-list.component.html',
})
export class OrdenesListComponent implements OnInit {

  public ordenes: Orden[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Orden[]>(baseUrl + 'ordenes').subscribe(result => {
      this.ordenes = result;
    }, error => console.error(error));
  }

  ngOnInit() {
  }

}


interface Orden {
  OrdenesId: number;
  Cantidad: number;
  ProductoId: number;
  ClienteId: number;
  Estado: boolean;
}

