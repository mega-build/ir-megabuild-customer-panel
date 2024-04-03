import { Component, Input} from '@angular/core';

@Component(
	{
		selector: 'floor-list',
		templateUrl: './floor-list.component.html',
		styleUrls: ['./floor-list.component.scss']
	}
)

export class FloorListComponent
	{
		@Input() floorList!:any[];
	}
