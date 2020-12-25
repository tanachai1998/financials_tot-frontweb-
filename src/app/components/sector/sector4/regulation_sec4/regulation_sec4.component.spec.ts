import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Regulation_sec4Component } from './regulation_sec4.component';

describe('Regulation_sec4Component', () => {
  let component: Regulation_sec4Component;
  let fixture: ComponentFixture<Regulation_sec4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Regulation_sec4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Regulation_sec4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
