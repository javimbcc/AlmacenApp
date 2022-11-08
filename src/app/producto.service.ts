import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Producto } from './clases';
import { productos } from './mock/lists';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor() { }

  getProductos(): Observable<Producto[]> {
    const products = of(productos);
    return products;
  }
}
