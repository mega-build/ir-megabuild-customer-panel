import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProjectDetailComponent } from 'src/components/project/project-detail/project-detail.component';
import { ProjectItemDetailComponent } from 'src/components/projectItem/project-item-detail/project-item-detail.component';
import { CompanyDetailComponent } from 'src/components/company/company-detail/company-detail.component';
import { ProjectPanelComponent } from 'src/components/project/project-panel/project-panel.component';

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
                            },

                        ],
                },
            ]
    },
]
