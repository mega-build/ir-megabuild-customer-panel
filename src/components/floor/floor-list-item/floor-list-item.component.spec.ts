import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorListItemComponent } from './floor-list-item.component';

describe('FloorListItemComponent', () => {
  let component: FloorListItemComponent;
  let fixture: ComponentFixture<FloorListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloorListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloorListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
