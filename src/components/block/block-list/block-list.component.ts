import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'block-list',
		templateUrl: './block-list.component.html',
		styleUrls: ['./block-list.component.scss']
	}
)

export class BlockListComponent
	{
		@Input() blockList!:any[];
	}
