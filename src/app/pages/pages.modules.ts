import {NgModule} from '@angular/core';
import {PAGES_ROUTES} from './pages.routes';

// Modules
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {ChartsComponent} from './charts/charts.component';


// TODO: Temporal
import {IncrementerComponent} from '../components/incrementer/incrementer.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    ChartsComponent,
    IncrementerComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    ChartsComponent,
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule
  ]
})
export class PagesModules { }
