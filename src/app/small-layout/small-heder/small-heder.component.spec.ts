import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallHederComponent } from './small-heder.component';

describe('SmallHederComponent', () => {
  let component: SmallHederComponent;
  let fixture: ComponentFixture<SmallHederComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallHederComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmallHederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
