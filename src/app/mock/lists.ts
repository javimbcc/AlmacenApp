import { Producto, Proveedor } from '../clases';

export const productos: Producto[] = [
  { id: 1, nombre: 'Aceite', stock: true, familia: 'Añadido', precio: '1€' },
  {
    id: 2,
    nombre: 'Aceitunas',
    stock: true,
    familia: 'Para picar',
    precio: '1€',
  },
  { id: 3, nombre: 'Patatas', stock: true, familia: 'Salados', precio: '2€' },
  {
    id: 4,
    nombre: 'Chocolate',
    stock: true,
    familia: 'Dulces',
    precio: '1.20€',
  },
  {
    id: 5,
    nombre: 'Pizza',
    stock: false,
    familia: 'Congelados',
    precio: '2.70€',
  },
];

export const proveedoresList: Proveedor[] = [
  {
    id: 1,
    nombre: 'Antonio',
    contacto: ['123456789', 'Antonio@gmail.com'],
    direccion: 'Calle nervion 3a',
  },
  {
    id: 2,
    nombre: 'Pepe',
    contacto: ['258595876', 'Pepe@gmail.com'],
    direccion: 'la cartuja edificio 1 pasillo 3',
  },
  {
    id: 3,
    nombre: 'Luis',
    contacto: ['234567890', 'Luis@gmail.com'],
    direccion: 'Nervion sevilla',
  },
  {
    id: 4,
    nombre: 'AceiteSA',
    contacto: ['345678901', 'AceitesSA@gmail.com'],
    direccion: 'Calle salamanca 4derecha 2a',
  },
  {
    id: 5,
    nombre: 'CongeladosBDCJ',
    contacto: ['567890123', 'CongeladosBDCJ@gmail.com'],
    direccion: 'Avenida de los descubrimientos pabellon de la navegacion ',
  },
];
