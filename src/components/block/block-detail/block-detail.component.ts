import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHelper } from 'src/helper/errorHelper';
import { BlockService } from 'src/services/block/block.service';

@Component(
	{
		selector: 'block-detail',
		templateUrl: './block-detail.component.html',
		styleUrls: ['./block-detail.component.scss']
	}
)

export class BlockDetailComponent
{
	blockId!:string;
	isLoading:boolean = false;
	block!:any;
	svgContent!:string;

	floorList!:any[];
	

	constructor
	(
		private route: ActivatedRoute,
		private router: Router,
		private blockService:BlockService,
		private errorHelper: ErrorHelper

	){}

	ngOnInit
	(): void 
		{
			this.route.params.subscribe(params => 
				{
					let blockIdParameter = params['blockId'];
					if
					(
						blockIdParameter
					)
						{
							this.blockId = blockIdParameter;
							//this.getBlock();
							this.getProjectSVGContent();
						}
					else
						{
							alert("آدرس نا مشخص")
						}
					
				}
			);
			
		}

	async getBlock
	(): Promise<void>
		{

			try
				{

					this.isLoading = true;

					const data = await this.blockService
						.get(
							this.blockId
						)

					console.log(data.block);
					this.block = data.block;
						
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

	async getProjectSVGContent
	(): Promise<void>
		{

			try
				{

					this.isLoading = true;

					const data = await this.blockService
						.getSVGContent(
							this.blockId
						)

						console.log(data);
						

					this.svgContent = data.svgContent;
						
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
