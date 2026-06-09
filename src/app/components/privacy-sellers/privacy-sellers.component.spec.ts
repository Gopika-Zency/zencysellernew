import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacySellersComponent } from './privacy-sellers.component';

describe('PrivacySellersComponent', () => {
  let component: PrivacySellersComponent;
  let fixture: ComponentFixture<PrivacySellersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacySellersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivacySellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
