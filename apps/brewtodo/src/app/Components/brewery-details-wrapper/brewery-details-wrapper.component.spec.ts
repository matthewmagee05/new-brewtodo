import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryDetailsWrapperComponent } from './brewery-details-wrapper.component';

describe('BreweryDetailsWrapperComponent', () => {
  let component: BreweryDetailsWrapperComponent;
  let fixture: ComponentFixture<BreweryDetailsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreweryDetailsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreweryDetailsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
