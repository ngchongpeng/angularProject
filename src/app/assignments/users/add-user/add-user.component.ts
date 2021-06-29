import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/_helpers/interfaces/User.model';
import { UsersService } from 'src/app/_services/users.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup;
  get f() { return this.addUserForm.controls; }

  constructor(private formBuilder: FormBuilder, private usersService: UsersService) { }

  ngOnInit() {
    this.addUserForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      country: ['SG', Validators.required],
      address: ['', Validators.required],
    });
  }

  addUser() {
    let user: User = this.addUserForm.value;
    this.usersService.createUser(user).subscribe(
      data => {
        this.addUserForm.reset();
      }
    );
  }
}