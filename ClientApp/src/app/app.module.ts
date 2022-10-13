import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// COMPONENTES
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ProductsListComponent } from './components/productos/products-list/products-list.component';
import { ClientesListComponent } from './components/Clientes/clientes-list/clientes-list.component';
import { OrdenesListComponent } from './components/Ordenes/ordenes-list/ordenes-list.component';
import { FormProductsComponent } from './components/productos/form-products/form-products.component';
import { FormClientesComponent } from './components/Clientes/form-clientes/form-clientes.component';
import { FormOrdenesComponent } from './components/Ordenes/form-ordenes/form-ordenes.component';

//SERVICIOS
import { ProductService } from '../app/Service/product.service'
import { ClientService } from '../app/Service/client.service'
import { OrdenService } from '../app/Service/orden.service'

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ProductsListComponent,
    ClientesListComponent,
    OrdenesListComponent,
    FormProductsComponent,
    FormClientesComponent,
    FormOrdenesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      //{ path: '', component: HomeComponent, pathMatch: 'full' },

      { path: 'product-list', component: ProductsListComponent },
      { path: 'product/add', component: FormProductsComponent },
      { path: 'product/edit/:idProduct', component: FormProductsComponent },

      { path: 'ordenes-list', component: OrdenesListComponent },
      { path: 'ordenes/add', component: FormOrdenesComponent },
      { path: 'ordenes/edit/:id', component: FormOrdenesComponent },

      { path: 'clientes-list', component: ClientesListComponent },
      { path: 'clientes/add', component: FormClientesComponent },
      { path: 'clientes/edit/:clientesId', component: FormClientesComponent },

    ])
  ],
  providers: [ProductService, ClientService, OrdenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
