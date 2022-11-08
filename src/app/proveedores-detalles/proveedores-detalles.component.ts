import { Component, Input, OnInit } from '@angular/core';
import { Proveedor } from '../clases';

@Component({
  selector: 'app-proveedores-detalles',
  templateUrl: './proveedores-detalles.component.html',
  styleUrls: ['./proveedores-detalles.component.css'],
})
export class ProveedoresDetallesComponent implements OnInit {
  @Input() proveedores?: Proveedor;
  constructor() {}

  ngOnInit(): void {}
}
