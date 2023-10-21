import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Component(
	{
		selector: 'project-list-item',
		templateUrl: './project-list-item.component.html',
		styleUrls: ['./project-list-item.component.scss']
	}
)

export class ProjectListItemComponent implements OnInit
	{
		@Input() project!: any;

		svgPath!:SafeHtml;
		constructor(
			private domSanitizer: DomSanitizer
		){}
		ngOnInit(): void {
			

			this.svgPath = this.domSanitizer.bypassSecurityTrustHtml(
				this.project.map
			);
		}

		
		
	}
