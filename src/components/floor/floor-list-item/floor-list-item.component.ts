import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'floor-list-item',
		templateUrl: './floor-list-item.component.html',
		styleUrls: ['./floor-list-item.component.scss']
	}
)

export class FloorListItemComponent
	{
		@Input() floor!:any;
	}
