import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Service
import { ProveedoresService } from './providers/proveedores/proveedores.service';
import { PresupuestosService } from './providers/presupuestos/presupuestos.service';
import { AutentificacionService } from './providers/autentificacion/autentificacion.service';

//Componentes
import { InicioComponent } from './components/inicio/inicio.component';
import { HeaderComponent } from './components/header/header.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { AddproveeComponent } from './components/addprovee/addprovee.component';
import { AddpresComponent } from './components/addpres/addpres.component';
import { RegistroComponent } from './components/autentificacion/registro/registro.component';
import { InisesComponent } from './components/autentificacion/inises/inises.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    ProveedoresComponent,
    AddproveeComponent,
    AddpresComponent,
    RegistroComponent,
    InisesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    ProveedoresService,
    PresupuestosService,
    AutentificacionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
