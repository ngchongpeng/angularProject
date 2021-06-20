import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task4-child1',
  templateUrl: './task4-child1.component.html',
  styleUrls: ['./task4-child1.component.css']
})
export class Task4Child1Component implements OnInit {
  @Output() inputSent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSendInput(data) {
    this.inputSent.emit(data.value);
  }
}
