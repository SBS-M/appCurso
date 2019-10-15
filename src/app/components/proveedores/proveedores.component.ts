import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from '../../providers/proveedores/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss']
})
export class ProveedoresComponent implements OnInit {
  
  proveedores:any;

  constructor(
    private proveedoresService: ProveedoresService
  ) { }

  ngOnInit() {
    this.proveedores = this.proveedoresService.getProveedores();
  }

}
