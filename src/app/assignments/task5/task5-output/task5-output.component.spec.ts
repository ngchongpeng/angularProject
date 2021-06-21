import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task5OutputComponent } from './task5-output.component';

describe('Task5OutputComponent', () => {
  let component: Task5OutputComponent;
  let fixture: ComponentFixture<Task5OutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task5OutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task5OutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
