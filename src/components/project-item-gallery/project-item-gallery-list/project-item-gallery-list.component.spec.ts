import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectItemGalleryListComponent } from './project-item-gallery-list.component';

describe('ProjectItemGalleryListComponent', () => {
  let component: ProjectItemGalleryListComponent;
  let fixture: ComponentFixture<ProjectItemGalleryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectItemGalleryListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectItemGalleryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
