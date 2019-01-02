import {Inject, Injectable} from '@angular/core';
import {Setting} from '../../shared/models/setting';
import {DOCUMENT} from '@angular/platform-browser';

@Injectable()
export class SettingsService {

  settings: Setting;

  constructor(@Inject(DOCUMENT) private _document) {
    this.settings = {
      themeUrl: 'assets/css/colors/default.css',
      theme: 'default'
    };
    this.loadSettings();
  }

  saveSettings() {
    localStorage.setItem('ui-settings', JSON.stringify(this.settings));
    localStorage.setItem('ui-settings-Time', JSON.stringify(new Date()));
  }

  loadSettings()  {
    if ( localStorage.getItem('ui-settings') ) {
      this.settings = JSON.parse(localStorage.getItem('ui-settings'));
      this.applyTheme(this.settings.theme);
    } else {
      console.log('using default config values');
    }
  }

  applyTheme(theme: string) {
    const url = `assets/css/colors/${theme}.css`;
    this._document.getElementById('theme').setAttribute('href', url);

    this.settings.theme = theme;
    this.settings.themeUrl = url;

    this.saveSettings();
  }

}
