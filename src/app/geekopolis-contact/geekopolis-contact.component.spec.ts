import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeekopolisContactComponent } from './geekopolis-contact.component';

describe('GeekopolisContactComponent', () => {
  let component: GeekopolisContactComponent;
  let fixture: ComponentFixture<GeekopolisContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeekopolisContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeekopolisContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
