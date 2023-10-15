import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'project-item-gallery-panel',
		templateUrl: './project-item-gallery-panel.component.html',
		styleUrls: ['./project-item-gallery-panel.component.scss']
	}
)

export class ProjectItemGalleryPanelComponent 
	{
		projectItemId!:string;
		@Input() projectItemGalleryList:any[] =[];
		//  = [
		// 	{
		// 		_id:1,
		// 		description:'desciption1'
		// 	},
		// 	{
		// 		_id:2,
		// 		description:'desciption2'
		// 	},
		// 	{
		// 		_id:3,
		// 		description:'desciption3'
		// 	},
		// ];
	}
