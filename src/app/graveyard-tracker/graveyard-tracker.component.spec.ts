import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraveyardTrackerComponent } from './graveyard-tracker.component';

describe('GraveyardTrackerComponent', () => {
  let component: GraveyardTrackerComponent;
  let fixture: ComponentFixture<GraveyardTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraveyardTrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraveyardTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
