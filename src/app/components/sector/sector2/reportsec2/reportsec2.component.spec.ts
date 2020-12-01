import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reportsec2Component } from './reportsec2.component';

describe('Reportsec2Component', () => {
  let component: Reportsec2Component;
  let fixture: ComponentFixture<Reportsec2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reportsec2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reportsec2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
