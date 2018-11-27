import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleAnalyticsComponent } from './title-analytics.component';

describe('TitleAnalyticsComponent', () => {
  let component: TitleAnalyticsComponent;
  let fixture: ComponentFixture<TitleAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
