import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'project-list',
		templateUrl: './project-list.component.html',
		styleUrls: ['./project-list.component.scss']
	}
)

export class ProjectListComponent
	{
		@Input() projectList!: any[];
	}
