import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProjectDetailComponent } from 'src/components/project/project-detail/project-detail.component';
import { ProjectItemDetailComponent } from 'src/components/projectItem/project-item-detail/project-item-detail.component';
import { CompanyDetailComponent } from 'src/components/company/company-detail/company-detail.component';
import { ProjectPanelComponent } from 'src/components/project/project-panel/project-panel.component';
import { ProjectPlanComponent } from 'src/components/project/project-plan/project-plan.component';
import { BlockDetailComponent } from 'src/components/block/block-detail/block-detail.component';
import { FloorDetailComponent } from 'src/components/floor/floor-detail/floor-detail.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent,
    },
    {
        path:'company/:companyId',
        component: CompanyDetailComponent,
        children:
            [
                {
                    path:'project',
                    children:
                        [
                            {
                                path:'list',
                                component: ProjectPanelComponent,
                            },
                            {
                                path:'detail/:projectId',
                                component: ProjectDetailComponent,
                                children:
                                    [
                                        {
                                            path:'block',
                                            children:
                                                [
                                                    // {
                                                    //     path:'list',
                                                    // },
                                                    {
                                                        path:'detail/:blockId',
                                                        component:BlockDetailComponent,
                                                        children:
                                                            [
                                                                {
                                                                    path:'floor',
                                                                    children:
                                                                        [
                                                                            {
                                                                                path:'detail/:floorId',
                                                                                component: FloorDetailComponent
                                                                            }
                                                                        ]
                                                                }
                                                            ]
                                                    }
                                                ]
                                        },
                                        {
                                            path:'projectItem',
                                            children:
                                                [
                                                    {
                                                        path:'list',
                                                        component: ProjectPanelComponent,
                                                    },
                                                    {
                                                        path:'detail/:projectItemId',
                                                        component: ProjectItemDetailComponent,
                                                    }
                                                ]
                                        }        
                                    ]
                            },

                        ],
                },
            ]
    },
]
