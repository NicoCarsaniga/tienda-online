import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeekopolisHomeComponent } from './geekopolis-home.component';

describe('GeekopolisHomeComponent', () => {
  let component: GeekopolisHomeComponent;
  let fixture: ComponentFixture<GeekopolisHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeekopolisHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeekopolisHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
