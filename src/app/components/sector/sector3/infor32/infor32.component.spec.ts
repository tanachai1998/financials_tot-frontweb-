import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Infor32Component } from './infor32.component';

describe('Infor32Component', () => {
  let component: Infor32Component;
  let fixture: ComponentFixture<Infor32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Infor32Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Infor32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
