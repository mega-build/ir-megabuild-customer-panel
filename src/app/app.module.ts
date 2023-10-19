import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';

import { ProjectItemDetailComponent } from '../components/projectItem/project-item-detail/project-item-detail.component';
import { ProjectDetailComponent } from '../components/project/project-detail/project-detail.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ProjectItemGalleryPanelComponent } from '../components/project-item-gallery/project-item-gallery-panel/project-item-gallery-panel.component';
import { ProjectItemGalleryListComponent } from '../components/project-item-gallery/project-item-gallery-list/project-item-gallery-list.component';
import { ProjectItemGalleryListItemComponent } from '../components/project-item-gallery/project-item-gallery-list-item/project-item-gallery-list-item.component';


import { LoadingComponent } from 'src/components/share/loading/loading.component';
import { EmptyListComponent } from '../components/share/empty-list/empty-list.component';
import { LoadingListComponent } from '../components/share/loading-list/loading-list.component';
import { PriceLabelComponent } from 'src/components/share/price-label/price-label.component';
import { CompanyDetailComponent } from 'src/components/company/company-detail/company-detail.component';
import { ProjectPanelComponent } from '../components/project/project-panel/project-panel.component';
import { ProjectListComponent } from '../components/project/project-list/project-list.component';
import { ProjectListItemComponent } from '../components/project/project-list-item/project-list-item.component';


@NgModule(
	{
		declarations: [
			AppComponent,
			ProjectItemDetailComponent,
			ProjectDetailComponent,
			HomeComponent,
			ProjectItemGalleryPanelComponent,
			ProjectItemGalleryListComponent,
			ProjectItemGalleryListItemComponent,
			PriceLabelComponent,
			LoadingComponent,
			EmptyListComponent,
			LoadingListComponent,
			CompanyDetailComponent,
   ProjectPanelComponent,
   ProjectListComponent,
   ProjectListItemComponent
		],
		imports: [
			BrowserModule,
			RouterModule,
			AppRoutingModule,
			HttpClientModule
		],
		providers: [],
		bootstrap: [AppComponent]
	}
)
export class AppModule { }
