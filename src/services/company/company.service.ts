import { Injectable } from '@angular/core';
import { HttpInterceptorService } from '../http-interceptor/http-interceptor.service';
import { environment } from 'src/environments/environment.development';
import { HttpHeaders } from '@angular/common/http';

@Injectable(
	{
		providedIn: 'root'
	}
)

export class CompanyService
	{
		private URL_COMPANY_ITEM_GET: string = `${environment.API_URL}/company`;

		constructor(
			private httpInterceptorService: HttpInterceptorService
		){}

		async get
		(
			companyId: string
		): Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();

				let url = `${this.URL_COMPANY_ITEM_GET}/${companyId}`;

				const result = await this.httpInterceptorService.get(
					url,
					headers
				);

				return result;
			}
		
	}
