import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'unit-panel',
		templateUrl: './unit-panel.component.html',
		styleUrls: ['./unit-panel.component.scss']
	}
)

export class UnitPanelComponent
	{
		@Input() unitList:any[]=[
			{
				_id:"1",
				title:"واحد 1"
			},
			{
				_id:"2",
				title:"واحد 2"
			},
		];
	}
