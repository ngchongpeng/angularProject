import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P06Component } from './p06.component';

describe('P06Component', () => {
  let component: P06Component;
  let fixture: ComponentFixture<P06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
