import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Regulation_sec5Component } from './regulation_sec5.component';

describe('Regulation_sec5Component', () => {
  let component: Regulation_sec5Component;
  let fixture: ComponentFixture<Regulation_sec5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Regulation_sec5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Regulation_sec5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
