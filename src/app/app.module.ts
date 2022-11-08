import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayerComponent } from './displayer/displayer.component';
import { ProductoComponent } from './producto/producto.component';
import { ProductoDetallesComponent } from './producto-detalles/producto-detalles.component';
import { FormsModule } from '@angular/forms';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ProveedoresDetallesComponent } from './proveedores-detalles/proveedores-detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayerComponent,
    ProductoComponent,
    ProductoDetallesComponent,
    ProveedoresComponent,
    ProveedoresDetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
