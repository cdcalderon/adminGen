import {NgModule} from '@angular/core';
import {PAGES_ROUTES} from './pages.routes';

// Modules
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';

// ng2-charts
import { ChartsModule } from 'ng2-charts';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {ChartsComponent} from './charts/charts.component';
import {DonutChartComponent} from '../components/donut-chart/donut-chart.component';

// TODO: Temporal
import {IncrementerComponent} from '../components/incrementer/incrementer.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    ChartsComponent,
    IncrementerComponent,
    DonutChartComponent,
    AccoutSettingsComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    ChartsComponent,
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule
  ]
})
export class PagesModules { }
