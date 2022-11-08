import { Component, OnInit } from '@angular/core';
import { Producto } from '../clases';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  product: Producto[] = [];
  selectedProducto?: Producto;
  constructor(private pService: ProductoService) { }

  getProductos(): void {
    this.pService.getProductos().subscribe((products) => (this.product = products));
  }

  onSelect(producto: Producto): void {
    this.selectedProducto = producto;
  }

  ngOnInit(): void {
    this.getProductos();
  }



}
