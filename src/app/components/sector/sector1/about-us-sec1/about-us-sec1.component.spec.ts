import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsSec1Component } from './about-us-sec1.component';

describe('AboutUsSec1Component', () => {
  let component: AboutUsSec1Component;
  let fixture: ComponentFixture<AboutUsSec1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsSec1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsSec1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
