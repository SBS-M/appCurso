import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(
    private http: HttpClient
  ) { }

  getFactura(){
    const headers = new HttpHeaders({
      'Context-Type': 'application/json'
    })
    return this.http.get('https://jsonplaceholder.typicode.com/posts/42', {headers}).subscribe(result => {
      console.log("result ", result);
      
    });
  }

}
