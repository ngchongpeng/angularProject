import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, ChangeDetectionStrategy, DoCheck, OnChanges, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Users } from '../_helpers/interfaces/userDetails';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;
  submited: boolean;
  usersData: Users;
  message: string = "This is child Message";
  @Output() PostData = new EventEmitter<Users>();
  @Input('user') user;
  @ViewChild('fname', { static: false, read: ElementRef }) firstname: ElementRef;

  constructor(private formBuilder: FormBuilder) {
    this.submited = false;
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  ngAfterViewInit() {
    this.firstname.nativeElement.style.border = "3px dashed green";
  }

  get f() {
    return this.registerForm.controls;
  }

  onScroll(event) {
    // console.log('On scroll in Signup Component');
  }

  handleSubmit() {
    this.submited = true;
    this.usersData = this.registerForm.value;
    this.PostData.emit(this.usersData)

    // this.message = "This is child Message Updated";
  }
}
