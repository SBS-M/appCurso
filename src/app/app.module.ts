import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Modulos
import { FacturasModule } from './facturas/facturas.module';

//Service
import { ProveedoresService } from './providers/proveedores/proveedores.service';
import { PresupuestosService } from './providers/presupuestos/presupuestos.service';
import { AutentificacionService } from './providers/autentificacion/autentificacion.service';
import { GuardService } from './providers/guard/guard.service';

//Componentes
import { InicioComponent } from './components/inicio/inicio.component';
import { HeaderComponent } from './components/header/header.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { AddproveeComponent } from './components/addprovee/addprovee.component';
import { AddpresComponent } from './components/addpres/addpres.component';
import { RegistroComponent } from './components/autentificacion/registro/registro.component';
import { InisesComponent } from './components/autentificacion/inises/inises.component';
import { UploadComponent } from './components/upload/upload.component';


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
    UploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FacturasModule,
  ],
  providers: [
    ProveedoresService,
    PresupuestosService,
    AutentificacionService,
    GuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
