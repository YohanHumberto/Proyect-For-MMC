import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../Models/cliente';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from '../../../Service/Client.service';


@Component({
  selector: 'app-form-clientes',
  templateUrl: './form-clientes.component.html',
})
export class FormClientesComponent implements OnInit {

  cliente: Cliente = new Cliente();
  alertDangerIsActive: boolean = false;
  alertSuccessIsActive: boolean = false;
  editIsActive: boolean = false;
  _clientService: ClientService;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this._clientService = clientService;
  }

  async ngOnInit(): Promise<void> {
    if (this.IsEditMode()) {
      this.editIsActive = true;
      let ele = await this._clientService.GetClientById(parseInt(this.IsEditMode()));
      this.cliente = ele ? ele : new Cliente();
    }
  }

  procesarFormulario(e: Event) {
    e.preventDefault();
    const { nombre, apellido, email } = this.cliente;
    if (nombre && apellido && email) {
      if (this.editIsActive) {
        this.Editcliente();
      } else {
        this.cliente.clientesId = 0;
        this.Addcliente();
      }
    } else {
      this.alertDangerIsActive = true;
      setTimeout(() => {
        this.alertDangerIsActive = false;
      }, 2000);
    }
  }

  async Addcliente() {
    this.cliente.clientesId = 0;
    if (await this._clientService.AddCliente(this.cliente) == true) {
      this.cliente = new Cliente();
      this.alertSuccessIsActive = true;
      setTimeout(() => {
        this.alertSuccessIsActive = false;
        this.router.navigateByUrl('/clientes-list');
      }, 2000);
    } else {
      alert("Ha ourrido un error");
    }
  }

  async Editcliente() {
    if (await this._clientService.EditCliente(this.cliente) == true) {
      this.cliente = new Cliente();
      this.alertSuccessIsActive = true;
      setTimeout(() => {
        this.alertSuccessIsActive = false;
        this.router.navigateByUrl('/clientes-list');
      }, 2000);
    } else {
      alert("Ha ourrido un error");
    }
  }

  IsEditMode() {
    return this.route.snapshot.paramMap.get('clientesId');
  }

}
