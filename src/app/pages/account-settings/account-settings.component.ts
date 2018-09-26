import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document) { }

  ngOnInit() {

  }

  changeThemeColor(theme: string) {
    console.log(theme);
    const url = `assets/css/colors/${theme}.css`;
    this._document.getElementById('theme').setAttribute('href', url);
  }
}
