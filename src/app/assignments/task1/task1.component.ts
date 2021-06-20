import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {
  @ViewChild('output', { static: false }) output: ElementRef<HTMLElement>;
  items = []

  constructor() { }

  ngOnInit() {
  }

  onItemAdded(data) {
    this.items.push(data);
    let element = new DOMParser().parseFromString(
      `
        <div>
            ${data.itemName} (${data.itemQty})
        </div>
      `, 'text/html'
    );

    this.output.nativeElement.appendChild(element.documentElement);
  }
}
