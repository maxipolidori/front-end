import { Injectable, OnInit } from '@angular/core';
import { FormInput } from './form-input';
import { Validators, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService
{
  inputs: FormInput[];

  constructor() 
  {
    this.setInputs();
  }

  private setInputs(): void
  {
    this.inputs = [
      new FormInput("Nombre (*)", "text", "nombre", "", [Validators.required]),
      new FormInput("Apellido (*)", "text", "apellido", "", [Validators.required]),
      new FormInput("Dirección", "text", "direccion", "", []),
      new FormInput("DNI (*)", "text", "dni", "", [Validators.required, Validators.pattern('[\\d]+')]),
      new FormInput("Fecha de nacimiento", "date", "nacimiento", "", []),
      new FormInput("Correo", "email", "email", "", [Validators.email])
    ];
  }

  public getForm(): FormGroup
  {
    let group = {};
    this.inputs.forEach(input => {
      group[input.key] = new FormControl(input.value, input.validators);
    });

    return new FormGroup(group);
  }

  public getInputs(): FormInput[]
  {
    return this.inputs;
  }
}
