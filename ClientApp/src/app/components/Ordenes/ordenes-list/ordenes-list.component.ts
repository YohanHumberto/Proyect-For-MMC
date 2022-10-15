import { Component, OnInit, Inject } from '@angular/core';
import { Orden } from '../../../Models/Orden';
import { OrdenService } from '../../../Service/orden.service';

@Component({
  selector: 'app-ordenes-list',
  templateUrl: './ordenes-list.component.html',
})
export class OrdenesListComponent implements OnInit {

  public ordenes: Orden[];
  public _ordeneservice: OrdenService;
  public searchText: string;
  public modalOpen: boolean = false;

  constructor(private ordeneservice: OrdenService) {
    this._ordeneservice = ordeneservice;
  }

  ngOnInit() {
    this.LoadData();
  }

  async LoadData() {
    this.ordenes = await this._ordeneservice.GetAllOrdenes();
  }

  async OnDeleteordene(ordeneId: number) {
    await this._ordeneservice.DeleteOrden(ordeneId);
    this.LoadData();
  }

  onSearch() {
    const resSearch = this.ordenes.filter(item => JSON.stringify(item).toLowerCase().trim().match(this.searchText.toLowerCase().trim()));
    this.ordenes = resSearch;
    if (this.searchText == "") this.LoadData();
  }

  ReloadData() {
    this.LoadData();
  }

  OnEditMode(id: number) {
    this.modalOpen = true;
    localStorage.setItem("IdOrdenEdit", `${id}`);
  }

  ChangeStateModalOpen(val: boolean) {
    this.modalOpen = val;
  }

}

