import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularityComponent } from './regularity.component';

describe('RegularityComponent', () => {
  let component: RegularityComponent;
  let fixture: ComponentFixture<RegularityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
