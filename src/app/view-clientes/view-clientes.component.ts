import { Component, OnInit } from '@angular/core';
import {ClientesService} from '../clientes.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-view-clientes',
  templateUrl: './view-clientes.component.html',
  styleUrls: ['./view-clientes.component.css']
})
export class ViewClientesComponent implements OnInit{

  clientes: Cliente[];
  constructor
  (
    private clienteService: ClientesService
  )
  { }

  ngOnInit()
  {
    this.getClientes();
  }

  public async getClientes(): Promise<void>
  {
    this.clientes = await this.clienteService.getClientes();
  }

  public async eliminar(c: Cliente): Promise<void>
  {
    await this.clienteService.removeCliente(c.id);
    this.getClientes();
  }
}
