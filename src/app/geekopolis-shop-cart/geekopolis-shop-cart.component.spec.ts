import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeekopolisShopCartComponent } from './geekopolis-shop-cart.component';

describe('GeekopolisShopCartComponent', () => {
  let component: GeekopolisShopCartComponent;
  let fixture: ComponentFixture<GeekopolisShopCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeekopolisShopCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeekopolisShopCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
