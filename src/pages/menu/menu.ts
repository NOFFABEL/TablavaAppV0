import { Tab1Page } from './../tab1/tab1';
import { Tab2Page } from './../tab2/tab2';
import { TabsPage } from './../tabs/tabs';
import { SpecialPage } from './../special/special';
import { HomePage } from '../home/home';
import { ListPage } from '../list/list';

import { Component, ViewChild } from '@angular/core';
import {NavController, Nav, NavParams, Tabs, Tab} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {HelloPage} from "../hello/hello";
import {TabsheadPage} from "../tabshead/tabshead";
import {WasherPage} from "../washer/washer";

export interface PageInterface{
	title:string;
	pageName:string;
    icon:string;
	tabComponent?: any;
	index?: number;
}

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  @ViewChild(Nav)
  public nav: Nav;
  rootPage: string = 'tabs-page';
  activePage: PageInterface;


  pages_menu: PageInterface[] = [
    { title: 'Acceuil', pageName: 'TabsPage', icon: 'home', tabComponent: 'HomePage', index: 0 },
    { title: 'Conso', pageName: 'TabsPage', icon: 'eye', tabComponent: 'HelloPage', index: 1 },
    { title: 'Hitorique', pageName: 'TabsPage', icon: 'book', tabComponent: 'SpecialPage', index: 2 },
    { title: 'Notif', pageName: 'TabsPage', icon: 'notifications', tabComponent: 'ListPage', index: 3 },
  ];

  pages: PageInterface[] = [
    { title: 'Nouvel Appareil', pageName: 'Washer', icon: 'add' },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.activePage = this.pages_menu[0];
  }

  isActive(page: PageInterface){
      let childNav = this.nav.getActiveChildNavs()[0];

      // Tabs are a special case because they have their own navigation

      if (childNav) {
          if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
              return 'primary';
          }
          return;
      }

      if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
          return 'primary';
      }
      return;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  /**
  * Use to open menu item
  * @param {PageInterface} page
  */
  openPage(page: PageInterface) {
      let params = {};

      if (page.index) {
          params = { tabIndex: page.index };
      }

      this.activePage = page;
      if (this.nav.getActiveChildNavs().length && page.index !== undefined) {
          this.nav.getActiveChildNavs()[0].select(page.index);
      } else {
          // Set the root of the nav with params if it's a tab index
          this.nav.setRoot(page.pageName, params).catch((err: any) => {
              console.log(`Didn't set nav root: ${err}`);
          });
      }
  }

  newWasher(p: PageInterface) {
      this.activePage = p;
      this.nav.push(WasherPage).catch((err:any) => {
          console.log(`Impossible to charge nav root: ${err}`)
      });
  }

  selectedPage(p: PageInterface) {
      return p === this.activePage;
  }

  logout() {
    window.localStorage.removeItem('username');
    window.localStorage.removeItem('password');

    this.nav.setRoot(LoginPage);
    //this.nav.popToRoot();
  }


}
