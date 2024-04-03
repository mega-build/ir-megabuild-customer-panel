import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockPlanComponent } from './block-plan.component';

describe('BlockPlanComponent', () => {
  let component: BlockPlanComponent;
  let fixture: ComponentFixture<BlockPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
