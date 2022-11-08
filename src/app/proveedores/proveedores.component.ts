import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../clases';
import { ProveedoresService } from '../proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css'],
})
export class ProveedoresComponent implements OnInit {
  proveedor: Proveedor[] = [];
  selectedProveedores?: Proveedor;
  constructor(private pService: ProveedoresService) {}

  getProveedores(): void {
    this.pService
      .getProveedores()
      .subscribe((proveedores) => (this.proveedor = proveedores));
  }

  onSelect(producto: Proveedor): void {
    this.selectedProveedores = producto;
  }
  ngOnInit(): void {
    this.getProveedores();
  }
}
