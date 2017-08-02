import { Tab2Page } from './../tab2/tab2';
import { Tab1Page } from './../tab1/tab1';


import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
 
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
 
  tab1Root: any = Tab1Page;
  tab2Root: any = Tab2Page;
  myIndex: number;

  hideNavBar:boolean = false;
 
  constructor(navParams: NavParams) {
    // Set the active tab based on the passed index from menu.ts
    this.myIndex = navParams.data.tabIndex || 0;
    this.hideNavBar = true;
  }
}
