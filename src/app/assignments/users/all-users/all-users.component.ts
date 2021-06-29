import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/_helpers/interfaces/User.model';
import { UsersService } from 'src/app/_services/users.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users: User[] = [];
  updateForm: FormGroup;
  submitted: boolean;

  constructor(private usersService: UsersService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.updateForm = this.formBuilder.group({
      id: [''],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      country: ['', Validators.required],
      address: ['', Validators.required]
    })
    this.getAllUsers();
  }

  openUpdateModal(user: User) {
    this.updateForm.setValue(user);
    this.submitted = false;
  }

  getAllUsers() {
    this.usersService.getUsers().subscribe(
      data => {
        this.users = data;
      }
    );
  }

  updateUser() {
    let user: User = this.updateForm.value;
    this.usersService.updateUser(user).subscribe(
      data => {
        this.submitted = true;
      }
    );
  }

  deleteUser(index: number) {
    let user: User = this.users[index];
    this.usersService.deleteUser(user).subscribe(
      data => {
        this.users.splice(index,1);
      }
    );
  }
}
