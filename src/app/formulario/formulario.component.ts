import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {ClientesService} from '../clientes.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
  export class FormularioComponent {

  checkoutForm;

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClientesService
  ) {
    this.checkoutForm = this.formBuilder.group(
      {
    nombre: '',
    apellido: '',
    direccion: ''
  });
  }

  onSubmit(clientData) {
    this.clienteService.addCliente(clientData);
  }
}
