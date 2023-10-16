import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHelper } from 'src/helper/errorHelper';
import { ProjectService } from 'src/services/project/project.service';

@Component(
	{
		selector: 'project-panel',
		templateUrl: './project-panel.component.html',
		styleUrls: ['./project-panel.component.scss']
	}
)

export class ProjectPanelComponent implements OnInit
	{
		companyId!:string;
		isLoading:boolean = false;
		projectList!:any[];

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
				console.log('hello');
				
				if
				(
					this.route.parent?.parent
				)
					{
						this.route.parent.parent.params.subscribe(params => 
							{
								let companyIdParameter = params['companyId'];
								if
								(
									companyIdParameter
								)
									{
										this.companyId =companyIdParameter;
										this.getCompanyProjectList();
									}
								else
									{
										alert("آدرس نا مشخص")
									}
								
							}
						);
					}
			}

		async getCompanyProjectList
		(): Promise<void>
			{

				try
					{

						this.isLoading = true;

						const data = await this.projectService
							.getAllProjectByCompanyId(
								this.companyId
							)

						console.log(data.company);
						this.projectList = data.projectList;
							
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
