import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyZencyComponent } from './why-zency.component';

describe('WhyZencyComponent', () => {
  let component: WhyZencyComponent;
  let fixture: ComponentFixture<WhyZencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyZencyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyZencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
