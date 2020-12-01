import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sector2Component } from './sector2.component';

describe('Sector2Component', () => {
  let component: Sector2Component;
  let fixture: ComponentFixture<Sector2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sector2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sector2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
