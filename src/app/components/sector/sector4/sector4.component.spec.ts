import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sector4Component } from './sector4.component';

describe('Sector4Component', () => {
  let component: Sector4Component;
  let fixture: ComponentFixture<Sector4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sector4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sector4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
