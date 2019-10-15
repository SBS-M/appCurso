import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { InicioComponent } from './components/inicio/inicio.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { AddproveeComponent } from './components/addprovee/addprovee.component';
import { AddpresComponent } from './components/addpres/addpres.component';
import { RegistroComponent } from './components/autentificacion/registro/registro.component';
import { InisesComponent } from './components/autentificacion/inises/inises.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'addprovee', component: AddproveeComponent },
  { path: 'addpre', component: AddpresComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'iniciosesion', component: InisesComponent },
  { path: '**', component: InicioComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
