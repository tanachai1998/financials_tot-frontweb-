import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Inforsec2Component } from './inforsec2.component';

describe('Inforsec2Component', () => {
  let component: Inforsec2Component;
  let fixture: ComponentFixture<Inforsec2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Inforsec2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Inforsec2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
