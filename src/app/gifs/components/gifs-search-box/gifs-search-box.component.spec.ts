import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsSearchBoxComponent } from './gifs-search-box.component';

describe('GifsSearchBoxComponent', () => {
  let component: GifsSearchBoxComponent;
  let fixture: ComponentFixture<GifsSearchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GifsSearchBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifsSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
