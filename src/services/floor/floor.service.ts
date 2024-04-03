import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpInterceptorService } from '../http-interceptor/http-interceptor.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable(
	{
  		providedIn: 'root'
	}
)

export class FloorService
{

	private URL_FLOOR_GET_ALL_BY_BLOCK: string = `${environment.API_URL}/floor/byBlock`;
	private URL_FLOOR_GET_BY_ID: string = `${environment.API_URL}/floor/`;
	

	constructor
	(
		private httpInterceptorService: HttpInterceptorService
	){}

	async getAllFloorByBlockId
	(
		blockId: string
	): Promise<any>
		{
			let headers: HttpHeaders = new HttpHeaders();

			let url = `${this.URL_FLOOR_GET_ALL_BY_BLOCK}/${blockId}`;

			const result = await this.httpInterceptorService.get(
				url,
				headers
			);

			return result;
		}

	async get(
		floorId:string
	):Promise<any>
		{
			let headers: HttpHeaders = new HttpHeaders();

			let url = `${this.URL_FLOOR_GET_BY_ID}/${floorId}`;

			const result = await this.httpInterceptorService.get(
				url,
				headers
			);

			return result;
		}
}
