import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'project-item-gallery-list',
		templateUrl: './project-item-gallery-list.component.html',
		styleUrls: ['./project-item-gallery-list.component.scss']
	}
)

export class ProjectItemGalleryListComponent
	{
		@Input() projectItemGalleryList!:any[];
	}
