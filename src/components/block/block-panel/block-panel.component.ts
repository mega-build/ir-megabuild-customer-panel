import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErrorHelper } from 'src/helper/errorHelper';
import { BlockService } from 'src/services/block/block.service';

@Component(
	{
		selector: 'block-panel',
		templateUrl: './block-panel.component.html',
		styleUrls: ['./block-panel.component.scss']
	}
)

export class BlockPanelComponent  implements OnInit
	{
		
		@Input() projectId!:string;
		isLoading:boolean = false;
		blockList!:any[];

		constructor(
			private blockService:BlockService,
			private route: ActivatedRoute,
			private errorHelper: ErrorHelper
		){}

		ngOnInit(): void {
			this.route.params.subscribe(async params => 
				{
					let projectIdParameter = params['projectId'];
					if
					(
						projectIdParameter
					)
						{
							this.projectId =projectIdParameter;
							await this.getAllBlockByProjectId();
						}
					else
						{
							alert("آدرس نا مشخص")
						}
					
				}
			);
		}

		async getAllBlockByProjectId
		():Promise<void>
			{
				try
						{

							this.isLoading = true;

							const data = await this.blockService
								.getAllBlockByProjectId(
									this.projectId
								)

							console.log(data.blockList);
							this.blockList = data.blockList;
								
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
