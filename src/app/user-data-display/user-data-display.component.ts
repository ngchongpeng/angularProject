import { MethodCall } from '@angular/compiler';
import { Component, OnInit, Input, AfterViewInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { $ } from 'protractor';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-user-data-display',
  templateUrl: './user-data-display.component.html',
  styleUrls: ['./user-data-display.component.css']
})
export class UserDataDisplayComponent implements OnInit {
  updateForm: FormGroup;
  @Input('userList') UserList: any[];
  @ViewChild('m', { static: false }) modUpdate;

  constructor(private formBuilder: FormBuilder, private usersService: UsersService) {
  }

  ngOnInit() {
    this.updateForm = this.formBuilder.group({
      id: [''],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
      address: ['', Validators.required]
    })
  }

  ngAfterViewChecked() {
    if (this.UserList.length > 0) {
    }
  }

  updateUser(user) {
    this.updateForm.setValue(user);
  }

  handleSubmit() {
    let user = this.updateForm.value;
    this.usersService.updateUser(user)
      .then(() => {
        let i = this.UserList.findIndex(u => u.id == user.id);
        this.UserList[i] = user;
      });
    this.updateForm.reset();
  }

  deleteUser(user) {
    this.usersService.deleteUser(user)
      .then(() => {
        let i = this.UserList.findIndex(u => u.id == user.id);
        this.UserList.splice(i, 1);
      });
  }
}
