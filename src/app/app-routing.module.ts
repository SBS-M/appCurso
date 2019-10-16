import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { InicioComponent } from './components/inicio/inicio.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { AddproveeComponent } from './components/addprovee/addprovee.component';
import { AddpresComponent } from './components/addpres/addpres.component';
import { RegistroComponent } from './components/autentificacion/registro/registro.component';
import { InisesComponent } from './components/autentificacion/inises/inises.component';
import { FacturasComponent } from './facturas/facturas/facturas.component';
import { GuardService } from './providers/guard/guard.service';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'proveedores', component: ProveedoresComponent, canActivate: [GuardService] },
  { path: 'addprovee', component: AddproveeComponent, canActivate: [GuardService] },
  { path: 'addpre', component: AddpresComponent, canActivate: [GuardService] },
  { path: 'registro', component: RegistroComponent },
  { path: 'iniciosesion', component: InisesComponent },
  { path: 'factura', component: FacturasComponent, canActivate: [GuardService] },
  { path: '**', component: InicioComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
