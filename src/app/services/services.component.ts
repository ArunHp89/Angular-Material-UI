import { Component } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Arun', weight: 'Front-end-developer', symbol: 'H10098'},
  {position: 2, name: 'Ram', weight: 'Graphic Designer', symbol: 'He9876'},
  {position: 3, name: 'Nitish', weight: 'Key Manager', symbol: 'Li0003'},
  {position: 4, name: 'Jitender', weight: 'React Js Developer', symbol: 'Be3423'},
  {position: 5, name: 'Rahul', weight: 'Dev Engg.', symbol: 'B2365'},
  {position: 6, name: 'Sunil', weight: 'Network Admin', symbol: 'C43434'},
  {position: 7, name: 'Vinay', weight: 'Full Stack Dev', symbol: 'N43434'},
  {position: 8, name: 'Max Well', weight:'Team Lead Full Stack Dev', symbol: 'O234'},
  {position: 9, name: 'Tony', weight: 'Sr. Designer', symbol: 'F545'},
  {position: 10, name: 'Wei', weight: 'Pipeline Developer', symbol: 'Ne65675'},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
