import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task5',
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.css']
})
export class Task5Component implements OnInit {
  @ViewChild('f', { static: false }) contactForm: NgForm;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    // localStorage.removeItem('contacts');
    if (localStorage.getItem('contacts') === null) {
      localStorage.setItem('contacts', JSON.stringify([]));
    }

    let contacts = JSON.parse(localStorage.getItem('contacts'));
    (contacts).push(this.contactForm.form.value);

    localStorage.setItem('contacts', JSON.stringify(contacts));

    alert('Submitted');
    this.contactForm.form.reset();
  }
}
