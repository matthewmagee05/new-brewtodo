import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweriesSearchComponent } from './breweries-search.component';

describe('BreweriesSearchComponent', () => {
  let component: BreweriesSearchComponent;
  let fixture: ComponentFixture<BreweriesSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreweriesSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreweriesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
