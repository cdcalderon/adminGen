import {NgModule} from '@angular/core';
import {PAGES_ROUTES} from './pages.routes';

// Modules
import {SharedModule} from '../shared/shared.module';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {ChartsComponent} from './charts/charts.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    ChartsComponent,
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    ChartsComponent,
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES
  ]
})
export class PagesModules { }
