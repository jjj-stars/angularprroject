import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProdComponent } from './search-prod.component';

describe('SearchProdComponent', () => {
  let component: SearchProdComponent;
  let fixture: ComponentFixture<SearchProdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchProdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
