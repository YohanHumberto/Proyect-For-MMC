import { Component, OnInit, EventEmitter, Output, Input, SimpleChanges } from '@angular/core';
import { Orden } from '../../../Models/Orden';
import { Producto } from '../../../Models/Producto';
import { Cliente } from '../../../Models/Cliente';
import { Router, ActivatedRoute } from '@angular/router';
import { OrdenService } from '../../../Service/orden.service';
import { ClientService } from '../../../Service/client.service';
import { ProductService } from '../../../Service/product.service';

@Component({
  selector: 'app-form-ordenes',
  templateUrl: './form-ordenes.component.html'
})
export class FormOrdenesComponent implements OnInit {

  orden: Orden = new Orden();
  Productos: Producto[];
  Clientes: Cliente[];
  alertDangerIsActive: boolean = false;
  alertSuccessIsActive: boolean = false;
  editIsActive: boolean = false;
  _ordenService: OrdenService;
  _clientService: ClientService;
  _productService: ProductService;
  @Output() ReloadData = new EventEmitter();
  @Input() modalOpen: boolean;
  @Output() ChangeStateModalOpen: EventEmitter<boolean>  = new EventEmitter();

  constructor(
    private ordenService: OrdenService,
    private clientService: ClientService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this._ordenService = ordenService;
    this._clientService = clientService;
    this._productService = productService;
  }

  async ngOnInit(): Promise<void> {
    this.loadDataForDropDowList();
    if (this.IsEditMode()) {
      this.editIsActive = true;
      let ele = await this._ordenService.GetOrdenById(parseInt(this.IsEditMode()));
      this.orden = ele ? ele : new Orden();
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.modalOpen.currentValue) this.ngOnInit();
  }

  async procesarFormulario(e: Event) {
    e.preventDefault();

    this.orden.productoId = parseInt(this.orden.productoId.toString());
    this.orden.clienteId = parseInt(this.orden.clienteId.toString());

    const { cantidad } = this.orden;
    if ( cantidad ) {
      if (this.editIsActive) {
        this.Editorden();
      } else {
        this.Addorden();
        this.orden.ordenesId = 0;
      }
    } else {
      this.alertDangerIsActive = true;
      setTimeout(() => {
        this.alertDangerIsActive = false;
      }, 2000);
    }
  }

  async Addorden() {
    this.orden.ordenesId = 0;
    if (await this._ordenService.AddOrden(this.orden) == true) {
      this.orden = new Orden();
      this.alertSuccessIsActive = true;
      setTimeout(() => {
        this.alertSuccessIsActive = false;
        this.router.navigateByUrl('/ordenes-list');
        this.closeModal();
        this.ReloadData.emit();
      }, 1000);
    } else {
      alert("Ha ourrido un error");
    }
  }

  async Editorden() {
    if (await this._ordenService.EditOrden(this.orden) == true) {
      this.orden = new Orden();
      this.alertSuccessIsActive = true;
      setTimeout(() => {
        this.alertSuccessIsActive = false;
        this.router.navigateByUrl('/ordenes-list');
        this.closeModal();
        this.ReloadData.emit();
      }, 2000);
    } else {
      alert("Ha ourrido un error");
    }
  }

  IsEditMode() {
    return localStorage.getItem("IdOrdenEdit");
  }

  async loadDataForDropDowList() {
    this.Clientes = await this._clientService.GetAllClientes();
    this.Productos = await this._productService.GetAllProducts();
  }

  closeModal() {
    this.ChangeStateModalOpen.emit(false);
    localStorage.removeItem("IdOrdenEdit");
  }
}
