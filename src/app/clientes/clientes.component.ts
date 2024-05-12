import { Component, Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clientes',
  standalone: false,
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
@Injectable({
  providedIn: 'root'
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
        active: true,
        addresses: [
          {
            addressId: 0,
            alias: "Casa",
            street: "Av Brasil",
            city: "San Francisco de Macorís",
            state: "Duarte",
            zipCode: "310000",
            country: "Republica Dominicana",
            active: true,
            createAt: new Date("2024-05-09"),
            clienteId: 0
          }
        ]
      },
      {
        clienteId: 1,
        name: "Juan",
        lastName: "Perez",
        cedula: "056-001007034-2",
        birthDate: new Date("2000-10-15"),
        createAt: new Date("2024-05-09"),
        email: "juanperezg@gmail.com",
        active: false,
        addresses: [
          {
            addressId: 1,
            alias: "Apartamento",
            street: "calle 27 de febrero",
            city: "San Francisco de Macorís",
            state: "Duarte",
            zipCode: "310000",
            country: "Republica Dominicana",
            active: true,
            createAt: new Date("2024-05-09"),
            clienteId: 1
          },
          {
            addressId: 2,
            alias: "Casa",
            street: "calle Duarte",
            city: "San Francisco de Macorís",
            state: "Duarte",
            zipCode: "310000",
            country: "Republica Dominicana",
            active: true,
            createAt: new Date("2024-05-09"),
            clienteId: 1
          }
        ]
      },
      {
        clienteId: 2,
        name: "Mazikeen",
        lastName: "Araujo",
        cedula: "056-001007034-3",
        birthDate: new Date("2020-01-20"),
        createAt: new Date("2024-05-09"),
        email: "maraujo@gmail.com",
        active: true,
        addresses: [
          {
            addressId: 2,
            alias: "Casa",
            street: "calle Duartr",
            city: "San Francisco de Macorís",
            state: "Duarte",
            zipCode: "310000",
            country: "Republica Dominicana",
            active: true,
            createAt: new Date("2024-05-09"),
            clienteId: 2
          }
        ]
      },
      {
        clienteId: 3,
        name: "Juanito",
        lastName: "Perecito",
        cedula: "056-001007034-3",
        birthDate: new Date("2000-10-15"),
        createAt: new Date("2024-05-09"),
        email: "juanperezg@gmail.com",
        active: false,
        addresses: [
          {
            addressId: 3,
            alias: "Apartamento",
            street: "calle 27 de febrero",
            city: "San Francisco de Macorís",
            state: "Duarte",
            zipCode: "310000",
            country: "Republica Dominicana",
            active: true,
            createAt: new Date("2024-05-09"),
            clienteId: 3
          }
        ]
      },
      {
        clienteId: 5,
        name: "Ramón",
        lastName: "Guzmán",
        cedula: "056-001007034-4",
        birthDate: new Date("2000-10-15"),
        createAt: new Date("2024-05-09"),
        email: "rguzman@gmail.com",
        active: false,
        addresses: [
          {
            addressId: 4,
            alias: "Apartamento",
            street: "calle 27 de febrero",
            city: "San Francisco de Macorís",
            state: "Duarte",
            zipCode: "310000",
            country: "Republica Dominicana",
            active: true,
            createAt: new Date("2024-05-09"),
            clienteId: 5
          }
        ]
      }
    ];
    getDireccionesByClienteId(clienteId: number) {
      const cliente = this.clientes.find(c => c.clienteId === clienteId);
      return cliente ? cliente.addresses : [];
    }
}
