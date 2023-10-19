import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHelper } from 'src/helper/errorHelper';
import { ProjectService } from 'src/services/project/project.service';

@Component(
	{
		selector: 'project-detail',
		templateUrl: './project-detail.component.html',
		styleUrls: ['./project-detail.component.scss']
	}
)

export class ProjectDetailComponent implements OnInit
{
	projectId!:string;
	isLoading:boolean = false;
	project!:any;

	constructor
	(
		private route: ActivatedRoute,
		private router: Router,
		private projectService:ProjectService,
		private errorHelper: ErrorHelper

	){}

	ngOnInit
	(): void 
		{
			this.route.params.subscribe(params => 
				{
					let projectIdParameter = params['projectId'];
					if
					(
						projectIdParameter
					)
						{
							this.projectId = projectIdParameter;
							this.getProject();
						}
					else
						{
							alert("آدرس نا مشخص")
						}
					
				}
			);
			
		}

	async getProject
	(): Promise<void>
		{

			try
				{

					this.isLoading = true;

					const data = await this.projectService
						.get(
							this.projectId
						)

					console.log(data.company);
					this.project = data.project;
						
					this.isLoading = false;
				}
			catch
			(
				error:any
			)
				{
					this.isLoading = false;
					this.errorHelper.showErrorAsAlert(error);
				}
		}
}
