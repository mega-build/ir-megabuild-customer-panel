import { HttpHeaders, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptorService } from '../http-interceptor/http-interceptor.service';
import { environment } from 'src/environments/environment.development';

@Injectable(
	{
  		providedIn: 'root'
	}
)

export class ProjectItemService
	{

		private URL_PROJECT_ITEM_GET: string = `${environment.API_URL}/projectItem`;

		constructor
				(
					private httpInterceptorService: HttpInterceptorService,
				){}

		async get
		(
			projectItemId: string
		): Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();

				let url = `${this.URL_PROJECT_ITEM_GET}/${projectItemId}`;

				const result = await this.httpInterceptorService.get(
					url,
					headers
				);

				return result;
			}
	}
