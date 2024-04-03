import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component(
	{
		selector: 'svg-viewer',
		templateUrl: './svg-viewer.component.html',
		styleUrls: ['./svg-viewer.component.scss']
	})
export class SvgViewerComponent implements OnInit
	{
		@Input() svgContnet!: string;
		svgPath!:SafeHtml;

		constructor(
			private domSanitizer: DomSanitizer
		){}
		ngOnInit(): void {
			

			this.svgPath = this.domSanitizer.bypassSecurityTrustHtml(
				this.svgContnet
			);
		}

		
	}
