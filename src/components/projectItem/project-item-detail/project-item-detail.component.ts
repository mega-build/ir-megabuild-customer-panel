import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectItemService } from 'src/services/projectItem/project-item.service';

@Component(
	{
		selector: 'project-item-detail',
		templateUrl: './project-item-detail.component.html',
		styleUrls: ['./project-item-detail.component.scss']
	}
)

export class ProjectItemDetailComponent implements OnInit
	{
		projectItemId!:string;
		isLoading:boolean = false;
		projectItem!:any;

		constructor
		(
			private route: ActivatedRoute,
			private router: Router,
			private projectItemService:ProjectItemService
		){}

		ngOnInit
		(): void 
			{
				this.route.params.subscribe(params => 
					{
						let projectItemIdParameter = params['projectItem'];
						if
						(
							projectItemIdParameter
						)
							{
								this.projectItemId =projectItemIdParameter;
								this.getProjectItem();
							}
						else
							{
								alert("آدرس نا مشخص")
							}
						
					}
				);
				
			}

		async getProjectItem
		(): Promise<void>
			{

				try
					{

						this.isLoading = true;

						const data = await this.projectItemService
							.get(
								this.projectItemId
							)

						console.log(data.contractReview);
						this.projectItem = data.projectItem;
							
						this.isLoading = false;
					}
				catch
				(
					error:any
				)
					{
						this.isLoading = false;
						alert(error)
						//this.errorHelper.showErrorAsAlert(error);
					}
			}
	}
