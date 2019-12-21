import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


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

  getClientes() {
    let clientes = [];
    this.http.get('http://localhost:5000/clientes').toPromise().then(data => {
      for(let i = 0; i < data['length']; i++) {
        clientes.push(data[i]);
      }
  });
  
  return clientes;
  }
}
