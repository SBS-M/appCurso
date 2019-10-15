import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class PresupuestosService {

  constructor(
    private http: HttpClient
  ) { }

  postPresupuesto(presupuesto?: any){
    const newpres = presupuesto ? JSON.stringify(presupuesto): '';
    const headers = new HttpHeaders({
      'Context-Type': 'application/json',
      AppId : 'BOP19_PAYMENTMODULE'
    })

    return this.http.post('https://cms-dev.bop-tech.com/api', {}, {headers}).subscribe( res =>{
      console.log("res ", res);
    })
  }

  getPresupuesto(presupuesto?: any){
    const newpres = presupuesto ? JSON.stringify(presupuesto): '';
    const headers = new HttpHeaders({
      'Context-Type': 'application/json',
      AppId : 'BOP19_PAYMENTMODULE'
    })

    return this.http.get('https://jsonplaceholder.typicode.com/posts/42').subscribe( res =>{
      console.log("res ", res);
    })
  }
}
