import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatWithAustrologerComponent } from './chat-with-austrologer.component';

describe('ChatWithAustrologerComponent', () => {
  let component: ChatWithAustrologerComponent;
  let fixture: ComponentFixture<ChatWithAustrologerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatWithAustrologerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatWithAustrologerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
