import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-task1-child',
  templateUrl: './task1-child.component.html',
  styleUrls: ['./task1-child.component.css']
})
export class Task1ChildComponent implements OnInit {
  @Output() itemAdded = new EventEmitter<{ itemName: string, itemQty: number }>();
  @ViewChild('itemName', { static: false }) itemName: ElementRef;
  @ViewChild('itemQty', { static: false }) itemQty: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    this.itemAdded.emit({
      itemName: this.itemName.nativeElement.value,
      itemQty: parseInt(this.itemQty.nativeElement.value, 10)
    });
  }
}
