import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P04Component } from './p04.component';

describe('P04Component', () => {
  let component: P04Component;
  let fixture: ComponentFixture<P04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
