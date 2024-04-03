import { Injectable } from '@angular/core';
import { HttpInterceptorService } from '../http-interceptor/http-interceptor.service';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable(
	{
  		providedIn: 'root'
	}
)

export class BlockService
	{

		private URL_BLOCK_GET_ALL_BY_PROJECT: string = `${environment.API_URL}/block/byProject`;
		private URL_BLOCK_GET_BY_ID: string = `${environment.API_URL}/block`;
		private URL_FLOOR_SVG_GET_BY_BLOCK_ID: string = `${environment.API_URL}/floor/svg/byBlock`;
		
		

		constructor
		(
			private httpInterceptorService: HttpInterceptorService
		){}

		async getAllBlockByProjectId
		(
			projectId: string
		): Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();

				let url = `${this.URL_BLOCK_GET_ALL_BY_PROJECT}/${projectId}`;

				const result = await this.httpInterceptorService.get(
					url,
					headers
				);

				return result;
			}

		async get(
			blockId:string
		):Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();

				let url = `${this.URL_BLOCK_GET_BY_ID}/${blockId}`;

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

				let url = `${this.URL_FLOOR_SVG_GET_BY_BLOCK_ID}/${projectId}`;

				const result = await this.httpInterceptorService.get(
					url,
					headers
				);

				return result;
			}

		
	}
