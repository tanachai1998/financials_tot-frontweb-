import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegContentComponent } from './reg-content.component';

describe('RegContentComponent', () => {
  let component: RegContentComponent;
  let fixture: ComponentFixture<RegContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
