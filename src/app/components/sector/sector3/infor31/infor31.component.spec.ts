import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Infor31Component } from './infor31.component';

describe('Infor31Component', () => {
  let component: Infor31Component;
  let fixture: ComponentFixture<Infor31Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Infor31Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Infor31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
