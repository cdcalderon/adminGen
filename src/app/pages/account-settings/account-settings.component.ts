import {Component, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
import {SettingsService} from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent  {

  constructor(@Inject(DOCUMENT) private _document, private settings: SettingsService) { }

  changeThemeColor(theme: string, link: any) {
    this.setSelectedCheck(link);

    this.settings.applyTheme(theme);
  }

  setSelectedCheck(link: any) {
    const selectors: any = this._document.getElementsByClassName('selector');

    for ( const ref of selectors ) {
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }

}
