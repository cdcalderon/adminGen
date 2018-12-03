import { Injectable } from '@angular/core';
import {Setting} from '../shared/models/setting';

@Injectable()
export class SettingsService {

  settings: Setting;

  constructor() {
    this.settings = {
      themeUrl: 'assets/css/colors/default.css',
      theme: 'default'
    };
  }

  saveSettings() {
    localStorage.setItem('ui-settings', JSON.stringify(this.saveSettings()));
    localStorage.setItem('ui-settings-Time', JSON.stringify(new Date()));
  }

  loadSettings()  {
    if ( localStorage.getItem('ui-settings') ) {
      this.settings = JSON.parse(localStorage.getItem('ui-settings'));
    } else {
      console.log('using default config values');
    }
  }

}
