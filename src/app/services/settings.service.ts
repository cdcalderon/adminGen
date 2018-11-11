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

}
