import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedBreweriesComponent } from './featured-breweries.component';

describe('FeaturedBreweriesComponent', () => {
  let component: FeaturedBreweriesComponent;
  let fixture: ComponentFixture<FeaturedBreweriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedBreweriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedBreweriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
