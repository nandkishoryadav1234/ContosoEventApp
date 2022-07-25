import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailViewShowComponent } from './detail-view-show.component';

describe('DetailViewShowComponent', () => {
  let component: DetailViewShowComponent;
  let fixture: ComponentFixture<DetailViewShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailViewShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailViewShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
