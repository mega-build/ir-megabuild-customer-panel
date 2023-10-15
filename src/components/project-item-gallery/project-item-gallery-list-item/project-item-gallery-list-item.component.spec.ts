import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectItemGalleryListItemComponent } from './project-item-gallery-list-item.component';

describe('ProjectItemGalleryListItemComponent', () => {
  let component: ProjectItemGalleryListItemComponent;
  let fixture: ComponentFixture<ProjectItemGalleryListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectItemGalleryListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectItemGalleryListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
