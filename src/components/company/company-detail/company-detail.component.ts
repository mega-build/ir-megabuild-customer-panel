import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHelper } from 'src/helper/errorHelper';
import { CompanyService } from 'src/services/company/company.service';

@Component(
	{
		selector: 'company-detail',
		templateUrl: './company-detail.component.html',
		styleUrls: ['./company-detail.component.scss']
	}
)

	export class CompanyDetailComponent implements OnInit
	{
		companyId!:string;
		isLoading:boolean = false;
		company!:any;

		constructor
		(
			private route: ActivatedRoute,
			private router: Router,
			private companyService:CompanyService,
			private errorHelper: ErrorHelper

		){}

		ngOnInit
		(): void 
			{
				this.route.params.subscribe(params => 
					{
						let companyIdParameter = params['companyId'];
						if
						(
							companyIdParameter
						)
							{
								this.companyId =companyIdParameter;
								this.getCompany();
							}
						else
							{
								alert("آدرس نا مشخص")
							}
						
					}
				);
				
			}

		async getCompany
		(): Promise<void>
			{

				try
					{

						this.isLoading = true;

						const data = await this.companyService
							.get(
								this.companyId
							)

						console.log(data.company);
						this.company = data.company;
							
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