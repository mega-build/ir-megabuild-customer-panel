import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'project-item-gallery-list-item',
		templateUrl: './project-item-gallery-list-item.component.html',
		styleUrls: ['./project-item-gallery-list-item.component.scss']
	}
)

export class ProjectItemGalleryListItemComponent
	{
		@Input() projectItemGallery!:any;

		getImageUrl
		():string
			{
				return `https://assets.megabuild.ir/projectItem/${this.projectItemGallery.filenName}`
			}
	}
