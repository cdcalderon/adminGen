import {Component, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent  {

  constructor(@Inject(DOCUMENT) private _document) { }

  changeThemeColor(theme: string, link: any) {
    console.log(theme);
    this.setSelectedCheck(link);
    const url = `assets/css/colors/${theme}.css`;
    this._document.getElementById('theme').setAttribute('href', url);
  }

  setSelectedCheck(link: any) {
    const selectors: any = this._document.getElementsByClassName('selector');

    for ( const ref of selectors ) {
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }

}
