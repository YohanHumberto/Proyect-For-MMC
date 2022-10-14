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
  public searchText: string;

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

  onSearch() {
    const resSearch = this.clientes.filter(item => JSON.stringify(item).toLowerCase().trim().match(this.searchText.toLowerCase().trim()));
    this.clientes = resSearch;
    if (this.searchText == "") this.LoadData();
  }

}

