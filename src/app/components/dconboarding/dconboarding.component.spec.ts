import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DconboardingComponent } from './dconboarding.component';

describe('DconboardingComponent', () => {
  let component: DconboardingComponent;
  let fixture: ComponentFixture<DconboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DconboardingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DconboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
