import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerSupportComponent } from './seller-support.component';

describe('SellerSupportComponent', () => {
  let component: SellerSupportComponent;
  let fixture: ComponentFixture<SellerSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerSupportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
