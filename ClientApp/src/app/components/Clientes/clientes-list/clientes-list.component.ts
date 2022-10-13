import { Component, OnInit, Inject } from '@angular/core';
import { Cliente } from '../../../Models/Cliente';
import { ClientService } from '../../../Service/client.service';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
})
export class ClientesListComponent implements OnInit {

  public clientes: Cliente[];
  public _ClienteService: ClientService;

  constructor(private ClienteService: ClientService) {
    this._ClienteService = ClienteService;
  }

  ngOnInit() {
    this.LoadData();
  }

  async LoadData() {
    this.clientes = await this._ClienteService.GetAllClientes();
  }

  async OnDeleteCliente(ClientesId: number) {
    await this._ClienteService.DeleteCliente(ClientesId);
    this.LoadData();
  }

}

