import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from '../clientes.service';
import { FormInput } from '../form-input';
import { FormService } from '../form.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-infocliente',
  templateUrl: './infocliente.component.html',
  styleUrls: ['./infocliente.component.css']
})
export class InfoclienteComponent implements OnInit {

  inputs: FormInput[];
  form: FormGroup;
  cliente: Cliente;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientesService,
    private formService: FormService)
    { }

  public async ngOnInit(): Promise<void>
  {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cliente = await this.clientService.getCliente(id);
    this.inputs = this.formService.getInputs();
    this.form = this.formService.getForm();
    let clienteCopy = Object.assign({}, this.cliente);
    delete clienteCopy.id;
    this.form.setValue(clienteCopy);
  }
  
  public update(c: Cliente): void
  {
    c.id = this.cliente.id;
    this.clientService.updateCliente(c);
    this.router.navigate(["/clientes"]);    
  }
}
