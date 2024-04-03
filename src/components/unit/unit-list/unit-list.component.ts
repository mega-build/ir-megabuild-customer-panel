import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'unit-list',
		templateUrl: './unit-list.component.html',
		styleUrls: ['./unit-list.component.scss']
	}
)

export class UnitListComponent
	{
		@Input() unitList!:any[];
	}
