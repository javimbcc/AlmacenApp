export class Producto {
  id: number = 0;
  nombre: string = '';
  stock: boolean = true;
  familia: string = '';
  precio: string = '';
}

export class Proveedor {
  id: number = 0;
  nombre: string = '';
  contacto: string[] = [];
  direccion: string = '';
}
