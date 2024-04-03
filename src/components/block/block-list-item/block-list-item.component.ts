import { Component,Input } from '@angular/core';

@Component(
	{
		selector: 'block-list-item',
		templateUrl: './block-list-item.component.html',
		styleUrls: ['./block-list-item.component.scss']
	}
)

export class BlockListItemComponent
	{
		@Input() block!:any;
	}
