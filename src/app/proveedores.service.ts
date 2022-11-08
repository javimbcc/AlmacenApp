import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Proveedor } from './clases';
import { proveedoresList } from './mock/lists';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  constructor() { }

  getProveedores(): Observable<Proveedor[]> {
    const proveedores = of (proveedoresList);
    return proveedores;
  }
}
