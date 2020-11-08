import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeekopolisAboutComponent } from './geekopolis-about.component';

describe('GeekopolisAboutComponent', () => {
  let component: GeekopolisAboutComponent;
  let fixture: ComponentFixture<GeekopolisAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeekopolisAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeekopolisAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
