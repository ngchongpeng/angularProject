import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, DoCheck } from '@angular/core';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-list-of-registered-users',
  templateUrl: './list-of-registered-users.component.html',
  styleUrls: ['./list-of-registered-users.component.css']
})
export class ListOfRegisteredUsersComponent implements OnInit, AfterViewInit {
  allUser = [];
  usersFromChild = [];
  user = {
    name: "Alex"
  }
  @ViewChild(SignUpComponent, { static: true }) child;
  //@ViewChild('fname',{static: false,read:ElementRef}) firstname: ElementRef;
  //@ViewChild('nameInput',{static: false,read:ElementRef}) someInput: ElementRef;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    //this.firstname.nativeElement.style.border = "3px dashed green";
    this.usersService.getUsers().then((json) => this.allUser = json);
  }

  ngAfterViewInit() {
    this.usersFromChild = this.child.message;
    //this.someInput.nativeElement.value = "Jugal";
    //this.firstname.nativeElement.style.border = "3px dashed green";
  }
  ngAfterViewChecked() {
    this.usersFromChild = this.child.usersData;
  }

  getRegisteredUser(event) {
    this.usersService.createUser(event).then(json => this.allUser.push(event));
  }

  // updateUser() {
  //   this.user.name = "Murali";
  // }
}
