import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSector5Component } from './contact-sector5.component';

describe('ContactSector5Component', () => {
  let component: ContactSector5Component;
  let fixture: ComponentFixture<ContactSector5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactSector5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSector5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
