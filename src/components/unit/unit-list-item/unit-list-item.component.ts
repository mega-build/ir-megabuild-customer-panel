import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'unit-list-item',
		templateUrl: './unit-list-item.component.html',
		styleUrls: ['./unit-list-item.component.scss']
	}
)

export class UnitListItemComponent
	{
		@Input() unit!:any;
	}
