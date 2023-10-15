import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectItemGalleryPanelComponent } from './project-item-gallery-panel.component';

describe('ProjectItemGalleryPanelComponent', () => {
  let component: ProjectItemGalleryPanelComponent;
  let fixture: ComponentFixture<ProjectItemGalleryPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectItemGalleryPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectItemGalleryPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
