import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HedingSectionComponent } from './heding-section.component';

describe('HedingSectionComponent', () => {
  let component: HedingSectionComponent;
  let fixture: ComponentFixture<HedingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HedingSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HedingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
