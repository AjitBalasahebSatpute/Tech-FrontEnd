import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KundaliMatchingComponent } from './kundali-matching.component';

describe('KundaliMatchingComponent', () => {
  let component: KundaliMatchingComponent;
  let fixture: ComponentFixture<KundaliMatchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KundaliMatchingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KundaliMatchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
