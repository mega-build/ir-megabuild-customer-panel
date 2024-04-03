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
		svgContent!:string;

		blockList!:any[];
		

		constructor
		(
			private route: ActivatedRoute,
			private router: Router,
			private projectService:ProjectService,
			private errorHelper: ErrorHelper

		){}

		groupBy(
			xs:any[],
			key:string
		)
			{
				return xs.reduce(function(rv, x)
					{
						(rv[x[key]] = rv[x[key]] || []).push(x);
						return rv;
					},
					{}
				);
			};

		getBlockList
		():any[]
			{
				const result = this.groupBy(this.project.projectItems,"block");
				const result2 = Object.entries(result).map(entry =>
					{
						return {
							block:entry[0],
							projectItems:entry[1]
						}
						
					})

				return result2;

			}

		getFloorList
		(
			projectItems:any[]
		):any[]
			{
				const result = this.groupBy(projectItems,"floor");
				const result2 = Object.entries(result).map(entry =>
					{
						return {
							floor:entry[0],
							projectItems:entry[1]
						}
						
					})
				return result2;

			}

		getUnitList
		(
			projectItems:any[]
		):any[]
			{
				const result = this.groupBy(projectItems,"unit");
				const result2 = Object.entries(result).map(entry =>
					{
						return {
							unit:entry[0],
							projectItems:entry[1]
						}
						
					})
				console.log(result2);
				
				return result2;

			}

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
								this.getProjectSVGContent();
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

						console.log(data.project);
						this.project = data.project;
							
						this.isLoading = false;
												
						//this.blockList = this.getBlockList();
						
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

		getSvgUrl():string
		{
			return `http://localhost:2002/block/svg/byProject/${this.projectId}`
		}

		async getProjectSVGContent
		(): Promise<void>
			{

				try
					{

						this.isLoading = true;

						const data = await this.projectService
							.getSVGContent(
								this.projectId
							)

							console.log(data);
							

						this.svgContent = data.svgContent;
							
						this.isLoading = false;
												
						//this.blockList = this.getBlockList();
						
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

		goToFloor
		(
			floorId:string
		):void 
			{
				alert(`Go To Floor${floorId}`)
			}
	}
