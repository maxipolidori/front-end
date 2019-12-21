import { Component, OnInit } from '@angular/core';
import {ClientesService} from '../clientes.service';

@Component({
  selector: 'app-view-clientes',
  templateUrl: './view-clientes.component.html',
  styleUrls: ['./view-clientes.component.css']
})
export class ViewClientesComponent{

  clientes;
  constructor(
    private clienteService: ClientesService
  ) {
      this.clientes = clienteService.getClientes();
  }

}
