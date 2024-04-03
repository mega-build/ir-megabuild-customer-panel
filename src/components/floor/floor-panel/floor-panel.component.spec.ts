import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorPanelComponent } from './floor-panel.component';

describe('FloorPanelComponent', () => {
  let component: FloorPanelComponent;
  let fixture: ComponentFixture<FloorPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloorPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloorPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
