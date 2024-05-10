import { Component } from '@angular/core';
import { Cliente } from '../models/cliente';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
    clientes : Cliente[] = [
      {
        clienteId: 0,
         name: "Joha",
          lastName: "Araujo",
          cedula: "056-00100734-1",
          birthDate: new Date("1995-01-08"),
          createAt: new Date("2024-05-09"),
          email: "johannaaraujog@gmail.com",
          active: true
      },
      {
        clienteId: 1,
         name: "Juan",
          lastName: "Perez",
          cedula: "056-001007034-2",
          birthDate: new Date("2000-10-15"),
          createAt: new Date("2024-05-09"),
          email: "juanperezg@gmail.com",
          active: false
      }
    ]
}
