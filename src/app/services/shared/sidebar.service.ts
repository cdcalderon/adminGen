import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [ {
    title: '',
    SubMenu: {
      title: '',
      category: ''
    }
  }];

  constructor() { }

}
