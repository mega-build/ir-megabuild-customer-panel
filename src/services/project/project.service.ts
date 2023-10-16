import { Injectable } from '@angular/core';
import { HttpInterceptorService } from '../http-interceptor/http-interceptor.service';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable(
	{
  		providedIn: 'root'
	}
)

export class ProjectService
	{

		private URL_PROJECT_GET_ALL_BY_COMPANY: string = `${environment.API_URL}/project/byCompany`;

		constructor
		(
			private httpInterceptorService: HttpInterceptorService
		){}

		async getAllProjectByCompanyId
		(
			companyId: string
		): Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();

				let url = `${this.URL_PROJECT_GET_ALL_BY_COMPANY}/${companyId}`;

				const result = await this.httpInterceptorService.get(
					url,
					headers
				);

				return result;
			}
	}
