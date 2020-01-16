import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ViewClientesComponent } from './view-clientes/view-clientes.component';
import { MainComponent } from './main/main.component';
import { InfoclienteComponent } from './infocliente/infocliente.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'add', component: FormularioComponent },
  { path: 'clientes', component: ViewClientesComponent },
  { path: 'clientes/:id', component: InfoclienteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
