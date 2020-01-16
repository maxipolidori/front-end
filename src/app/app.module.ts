import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ViewClientesComponent } from './view-clientes/view-clientes.component';
import { ClientesService } from './clientes.service';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { InfoclienteComponent } from './infocliente/infocliente.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    FormularioComponent,
    ViewClientesComponent,
    MainComponent,
    InfoclienteComponent,
  ],
  bootstrap: [ AppComponent ],
  providers: [ClientesService],
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
