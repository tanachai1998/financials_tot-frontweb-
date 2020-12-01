import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Metricsec2Component } from './metricsec2.component';

describe('Metricsec2Component', () => {
  let component: Metricsec2Component;
  let fixture: ComponentFixture<Metricsec2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Metricsec2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Metricsec2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
