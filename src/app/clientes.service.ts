import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Cliente } from './cliente';


/*const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    responseType: 'text'
  })
};*/

@Injectable()
export class ClientesService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  addCliente(cliente) {
    this.http.post('http://localhost:5000/', cliente).
    toPromise().then(res => 
      {
        this.router.navigate(['/clientes']);
      });

    }

  public async getClientes(): Promise<Array<Cliente>>
  {
    let clientes = await this.http.get<Array<Cliente>>('http://localhost:5000/clientes').toPromise();
    return clientes;
  }
}
