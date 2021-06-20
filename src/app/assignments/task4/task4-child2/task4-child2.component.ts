import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task4-child2',
  templateUrl: './task4-child2.component.html',
  styleUrls: ['./task4-child2.component.css']
})
export class Task4Child2Component implements OnInit {
  @Input() output;

  constructor() { }

  ngOnInit() {
  }
}
