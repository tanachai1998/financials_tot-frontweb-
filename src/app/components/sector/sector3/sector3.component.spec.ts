import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sector3Component } from './sector3.component';

describe('Sector1Component', () => {
  let component: Sector3Component;
  let fixture: ComponentFixture<Sector3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sector3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sector3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
