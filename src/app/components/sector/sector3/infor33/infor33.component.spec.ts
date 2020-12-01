import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Infor33Component } from './infor33.component';

describe('Infor33Component', () => {
  let component: Infor33Component;
  let fixture: ComponentFixture<Infor33Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Infor33Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Infor33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
