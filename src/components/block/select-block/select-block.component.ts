import { Component, Input, OnInit } from '@angular/core';
import { ErrorHelper } from 'src/helper/errorHelper';
import { BlockService } from 'src/services/block/block.service';

@Component(
	{
		selector: 'select-block',
		templateUrl: './select-block.component.html',
		styleUrls: ['./select-block.component.scss']
	}
)

export class SelectBlockComponent implements OnInit
	{
		@Input() projectId!:string;
		isLoading:boolean = false;
		blockList!:any[];

		constructor(
			private blockService: BlockService,
			private errorHelper: ErrorHelper
		){}
		async ngOnInit(): Promise<void> {
			await this.getAllBlockByProjectId();
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
