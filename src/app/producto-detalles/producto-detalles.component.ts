import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../clases';

@Component({
  selector: 'app-producto-detalles',
  templateUrl: './producto-detalles.component.html',
  styleUrls: ['./producto-detalles.component.css'],
})
export class ProductoDetallesComponent implements OnInit {
  @Input() products?: Producto;
  constructor() {}

  ngOnInit(): void {}
}
