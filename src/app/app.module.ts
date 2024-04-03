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
import { ProjectPlanComponent } from '../components/project/project-plan/project-plan.component';
import { BlockPanelComponent } from '../components/block/block-panel/block-panel.component';
import { SvgViewerComponent } from '../components/share/svg-viewer/svg-viewer.component';
import { FloorPanelComponent } from '../components/floor/floor-panel/floor-panel.component';
import { BlockListComponent } from '../components/block/block-list/block-list.component';
import { BlockListItemComponent } from '../components/block/block-list-item/block-list-item.component';
import { BlockPlanComponent } from 'src/components/block/block-plan/block-plan.component';
import { FloorPlanComponent } from '../components/floor/floor-plan/floor-plan.component';
import { BlockDetailComponent } from '../components/block/block-detail/block-detail.component';
import { FloorListComponent } from '../components/floor/floor-list/floor-list.component';
import { FloorListItemComponent } from '../components/floor/floor-list-item/floor-list-item.component';
import { FloorDetailComponent } from '../components/floor/floor-detail/floor-detail.component';
import { UnitPanelComponent } from '../components/unit/unit-panel/unit-panel.component';
import { UnitListComponent } from '../components/unit/unit-list/unit-list.component';
import { UnitListItemComponent } from '../components/unit/unit-list-item/unit-list-item.component';
import { SelectBlockComponent } from 'src/components/block/select-block/select-block.component';
import { SelectFloorComponent } from '../components/floor/select-floor/select-floor.component';
import { SelectUnitComponent } from '../components/unit/select-unit/select-unit.component';




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
			ProjectListItemComponent,
			ProjectPlanComponent,
			BlockPanelComponent,
			SvgViewerComponent,
			FloorPanelComponent,
			BlockListComponent,
			BlockListItemComponent,
			BlockPlanComponent,
			FloorPlanComponent,
			BlockDetailComponent,
			FloorListComponent,
			FloorListItemComponent,
			FloorDetailComponent,
			UnitPanelComponent,
			UnitListComponent,
			UnitListItemComponent,
			SelectBlockComponent,
   SelectFloorComponent,
   SelectUnitComponent
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
