import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantDashBoardComponent } from './restaurant-dash-board.component';

describe('RestaurantDashBoardComponent', () => {
  let component: RestaurantDashBoardComponent;
  let fixture: ComponentFixture<RestaurantDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestaurantDashBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
