import { Component, OnInit } from '@angular/core';
import { Validators, ValidatorFn, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ClientesService} from '../clientes.service';
import { Router } from '@angular/router';
import { Cliente } from '../cliente';
import { FormInput } from '../form-input';
import { FormService } from '../form.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
  export class FormularioComponent implements OnInit {

  form: FormGroup;
  inputs: FormInput[];

  constructor(
    private clienteService: ClientesService,
    private router: Router,
    private fs: FormService
  ) {}

  
  ngOnInit()
  {
    this.inputs = this.fs.getInputs();
    this.form = this.fs.getForm();
  }

  public async onSubmit(clientData: Cliente): Promise<void>
  {
    let cl = await this.clienteService.addCliente(clientData);
    window.alert(`Cliente creado con ID: ${cl.id}`);
    this.router.navigate(['/clientes']);
  }
}
