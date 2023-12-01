import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigHederComponent } from './big-heder.component';

describe('BigHederComponent', () => {
  let component: BigHederComponent;
  let fixture: ComponentFixture<BigHederComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigHederComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BigHederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
