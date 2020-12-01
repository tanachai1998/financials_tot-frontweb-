import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sector1Component } from './sector1.component';

describe('Sector1Component', () => {
  let component: Sector1Component;
  let fixture: ComponentFixture<Sector1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sector1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sector1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
