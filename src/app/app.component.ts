import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-mui';
  status: boolean = false;
  constructor( private location: Location ) { 
  }

  goBack() {
    // window.history.back();
    this.location.back();
  }
}
