import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules
import {PagesModules} from './pages/pages.modules';

// Routes
import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { IncrementincrementerComponent } from './components/incrementincrementer/incrementincrementer.component';
import { IncrementerComponent } from './components/incrementer/incrementer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    IncrementincrementerComponent,
    IncrementerComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
