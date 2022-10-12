import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ProductsListComponent } from './components/productos/products-list/products-list.component';
import { ClientesListComponent } from './components/Clientes/clientes-list/clientes-list.component';
import { OrdenesListComponent } from './components/Ordenes/ordenes-list/ordenes-list.component';
import { FormProductsComponent } from './components/productos/form-products/form-products.component';
import { FormClientesComponent } from './components/Clientes/form-clientes/form-clientes.component';
import { FormOrdenesComponent } from './components/Ordenes/form-ordenes/form-ordenes.component';

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
      { path: 'ordenes-list', component: OrdenesListComponent },
      { path: 'clientes-list', component: ClientesListComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
