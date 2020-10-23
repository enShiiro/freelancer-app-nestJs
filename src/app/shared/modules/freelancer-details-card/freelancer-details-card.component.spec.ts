import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerDetailsCardComponent } from './freelancer-details-card.component';

describe('FreelancerDetailsCardComponent', () => {
  let component: FreelancerDetailsCardComponent;
  let fixture: ComponentFixture<FreelancerDetailsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancerDetailsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
