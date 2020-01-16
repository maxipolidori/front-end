import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from './cliente';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    responseType: 'text'
  })
};

@Injectable()
export class ClientesService {

  serverBaseUrl: string;

  constructor(
    private http: HttpClient
  ) 
  {
    this.serverBaseUrl = 'http://localhost:5000'
  }

  public async addCliente(cliente: Cliente): Promise<Cliente>
  {
    let cl = await this.http.post<Cliente>(this.serverBaseUrl, cliente, httpOptions).toPromise();
    return cl;   
  }

  public async getClientes(): Promise<Array<Cliente>>
  {
    let clientes = await this.http.get<Array<Cliente>>(this.serverBaseUrl + '/clientes', httpOptions).toPromise();
    return clientes;
  }

  public async getCliente(id:number): Promise<Cliente>
  {
    let cliente = await this.http.get<Cliente>(`${this.serverBaseUrl}/clientes/${id}`, httpOptions).toPromise();
    return cliente;
  }

  public async updateCliente(cliente: Cliente): Promise<Cliente>
  {
    let c = await this.http.put<Cliente>(`${this.serverBaseUrl}/clientes/${cliente.id}`, cliente, httpOptions).toPromise();
    return c;
  }

  public async removeCliente(id: number): Promise<void>
  {
    let resp = await this.http.delete<Cliente>(`${this.serverBaseUrl}/clientes/${id}`, {observe: 'response'}).toPromise();
  }
}
