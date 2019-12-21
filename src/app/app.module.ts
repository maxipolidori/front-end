import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ViewClientesComponent } from './view-clientes/view-clientes.component';
import { ClientesService } from './clientes.service';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: FormularioComponent },
      { path: 'clientes', component: ViewClientesComponent },
    ])
  ],
  declarations: [
    AppComponent,
    FormularioComponent,
    ViewClientesComponent
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
