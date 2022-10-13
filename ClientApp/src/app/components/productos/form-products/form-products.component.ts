import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../Models/Producto';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../Service/product.service';


@Component({
  selector: 'app-form-products',
  templateUrl: './form-products.component.html',
})
export class FormProductsComponent implements OnInit {

  producto: Producto = new Producto();
  alertDangerIsActive: boolean = false;
  alertSuccessIsActive: boolean = false;
  editIsActive: boolean = false;
  _productService: ProductService;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this._productService = productService;
  }

  async ngOnInit(): Promise<void> {
    if (this.IsEditMode()) {
      this.editIsActive = true;
      let ele = await this._productService.GetProdutById(parseInt(this.IsEditMode()));
      this.producto = ele ? ele : new Producto();
    }
  }

  procesarFormulario(e: Event) {
    e.preventDefault();
    const { nombre, tipo, cantidad, precio } = this.producto;
    if (nombre && tipo && cantidad && precio) {
      if (this.editIsActive) {
        this.Editproducto();
      } else {
        this.Addproducto();
      }
    } else {
      this.alertDangerIsActive = true;
      setTimeout(() => {
        this.alertDangerIsActive = false;
      }, 2000);
    }
  }

  async Addproducto() {
    this.producto.productosId = 0;
    if (await this._productService.AddProduct(this.producto) == true) {
      this.producto = new Producto();
      this.alertSuccessIsActive = true;
      setTimeout(() => {
        this.alertSuccessIsActive = false;
        this.router.navigateByUrl('/product-list');
      }, 2000);
    } else {
      alert("Ha ourrido un error");
    }
  }

  async Editproducto() {
    if (await this._productService.EditProduct(this.producto) == true) {
      this.producto = new Producto();
      this.alertSuccessIsActive = true;
      setTimeout(() => {
        this.alertSuccessIsActive = false;
        this.router.navigateByUrl('/product-list');
      }, 2000);
    } else {
      alert("Ha ourrido un error");
    }
  }

  IsEditMode() {
    return this.route.snapshot.paramMap.get('idProduct');
  }
}
