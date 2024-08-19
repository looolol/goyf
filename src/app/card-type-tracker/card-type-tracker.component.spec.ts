import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTypeTrackerComponent } from './card-type-tracker.component';

describe('CardTypeTrackerComponent', () => {
  let component: CardTypeTrackerComponent;
  let fixture: ComponentFixture<CardTypeTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTypeTrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTypeTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
