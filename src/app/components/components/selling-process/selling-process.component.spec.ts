import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingProcessComponent } from './selling-process.component';

describe('SellingProcessComponent', () => {
  let component: SellingProcessComponent;
  let fixture: ComponentFixture<SellingProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellingProcessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellingProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
