import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P01Component } from './p01.component';

describe('P01Component', () => {
  let component: P01Component;
  let fixture: ComponentFixture<P01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
