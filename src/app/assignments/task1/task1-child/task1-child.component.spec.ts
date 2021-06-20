import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task1ChildComponent } from './task1-child.component';

describe('Task1ChildComponent', () => {
  let component: Task1ChildComponent;
  let fixture: ComponentFixture<Task1ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task1ChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task1ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
