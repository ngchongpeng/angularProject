import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.css']
})
export class Task4Component implements OnInit {
  receivedInput: string;

  constructor() { }

  ngOnInit() {
  }

  onInputSent(data) {
    this.receivedInput = data;
  }
}
