import { Component, OnInit } from '@angular/core';
import { FacturaService } from './../providers/factura.service';
import { timeout } from 'rxjs-compat/operator/timeout';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.scss']
})
export class FacturasComponent implements OnInit {

  cargando = true;

  constructor(
    private facturaService: FacturaService
  ) { 
    console.log("this.facturaService.getFactura(); ", this.facturaService.getFactura());
    
  }

  ngOnInit() {
    setTimeout(() =>{
      this.cargando = false;
    },5000)
  }

}
