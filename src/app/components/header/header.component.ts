import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from './../../providers/autentificacion/autentificacion.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private autService: AutentificacionService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  isAuth() {
    return this.autService.isAuthenticated();
  }

  onLogout() {
    this.autService.logout();
    this.router.navigate(['/inicio'])
  }

}
