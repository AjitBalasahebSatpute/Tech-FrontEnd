import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPoojaComponent } from './book-pooja.component';

describe('BookPoojaComponent', () => {
  let component: BookPoojaComponent;
  let fixture: ComponentFixture<BookPoojaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookPoojaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookPoojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
