import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sector5Component } from './sector5.component';

describe('Sector5Component', () => {
  let component: Sector5Component;
  let fixture: ComponentFixture<Sector5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sector5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sector5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
