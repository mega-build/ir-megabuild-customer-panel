import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErrorHelper } from 'src/helper/errorHelper';
import { FloorService } from 'src/services/floor/floor.service';

@Component(
	{
		selector: 'floor-panel',
		templateUrl: './floor-panel.component.html',
		styleUrls: ['./floor-panel.component.scss']
	}
)

export class FloorPanelComponent
	{
		@Input() blockId!:string;
		isLoading:boolean = false;
		floorList!:any[];

		constructor(
			private floorService:FloorService,
			private route: ActivatedRoute,
			private errorHelper: ErrorHelper
		){}

		ngOnInit(): void {
			this.route.params.subscribe(async params => 
				{
					let blockIdParameter = params['blockId'];
					if
					(
						blockIdParameter
					)
						{
							this.blockId =blockIdParameter;
							await this.getAllFloorByBlockId();
						}
					else
						{
							alert("آدرس نا مشخص")
						}
					
				}
			);
		}

		async getAllFloorByBlockId
		():Promise<void>
			{
				try
						{

							this.isLoading = true;

							const data = await this.floorService
								.getAllFloorByBlockId(
									this.blockId
								)

							console.log(data.floorList);
							this.floorList = data.floorList;
								
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
