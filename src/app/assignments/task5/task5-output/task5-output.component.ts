import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task5-output',
  templateUrl: './task5-output.component.html',
  styleUrls: ['./task5-output.component.css']
})
export class Task5OutputComponent implements OnInit {
  users;

  constructor() { }

  ngOnInit() {
    this.fetchLatestData();
  }

  fetchLatestData() {
    this.users = JSON.parse(localStorage.getItem('contacts'));
  }
}
