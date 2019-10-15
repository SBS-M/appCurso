import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'appCompras';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA2EYB7U8ekqMJYd_HJFjV3VgeIcj0Fdoo',
      authDomain: 'comprasapp-2775e.firebaseio.com/'
    });
  }
}
