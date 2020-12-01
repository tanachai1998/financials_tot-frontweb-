import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reg5Component } from './reg5.component';

describe('Reg5Component', () => {
  let component: Reg5Component;
  let fixture: ComponentFixture<Reg5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reg5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reg5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
