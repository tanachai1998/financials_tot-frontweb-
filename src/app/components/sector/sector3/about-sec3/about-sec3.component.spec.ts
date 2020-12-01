import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSec3Component } from './about-sec3.component';

describe('AboutSec3Component', () => {
  let component: AboutSec3Component;
  let fixture: ComponentFixture<AboutSec3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSec3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSec3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
