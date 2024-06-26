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
		private URL_PROJECT_GET_BY_ID: string = `${environment.API_URL}/project`;
		private URL_BLOCK_SVG_GET_BY_PROJECT_ID: string = `${environment.API_URL}/block/svg/byProject`;
		

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

		async get(
			projectId:string
		):Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();

				let url = `${this.URL_PROJECT_GET_BY_ID}/${projectId}`;

				const result = await this.httpInterceptorService.get(
					url,
					headers
				);

				return result;
			}

		async getSVGContent(
			projectId:string
		):Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();

				let url = `${this.URL_BLOCK_SVG_GET_BY_PROJECT_ID}/${projectId}`;

				const result = await this.httpInterceptorService.get(
					url,
					headers
				);

				return result;
			}
	}
