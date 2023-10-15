import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProjectDetailComponent } from 'src/components/project/project-detail/project-detail.component';
import { ProjectItemDetailComponent } from 'src/components/projectItem/project-item-detail/project-item-detail.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent,
    },
    {
        path:'project',
        component: ProjectDetailComponent,
    },
    {
        path:'projectItem/:projectItem',
        component: ProjectItemDetailComponent,
    },
]
