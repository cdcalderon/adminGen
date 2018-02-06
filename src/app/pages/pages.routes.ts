import {RouterModule, Routes} from '@angular/router';

import {ProgressComponent} from './progress/progress.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PagesComponent} from './pages.component';
import {ChartsComponent} from './charts/charts.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'charts', component: ChartsComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
