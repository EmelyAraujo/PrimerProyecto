import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Direccion } from '../models/direccion';
import { ClientesComponent } from '../clientes/clientes.component';

@Component({
  selector: 'app-direccion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './direccion.component.html',
  styleUrl: './direccion.component.css'
})
export class DireccionComponent implements OnInit  {
    direcciones : Direccion[] = [];
    constructor(private clientesComponent: ClientesComponent) {}

  ngOnInit() {
    // Obtener las direcciones de un cliente específico
    const clienteId = 1; // Reemplaza con el ID del cliente deseado
    this.direcciones = this.clientesComponent.getDireccionesByClienteId(clienteId);
  }
}
