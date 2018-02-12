import { Tab2Page } from './../tab2/tab2';
import { Tab1Page } from './../tab1/tab1';


import { Component } from '@angular/core';
import {IonicPage, MenuController, NavParams} from 'ionic-angular';
import {HelloPage} from "../hello/hello";
import {HomePage} from "../home/home";
import {SpecialPage} from "../special/special";
import {ListPage} from "../list/list";
import {MenuPage} from "../menu/menu";

@IonicPage({
  name: 'tabs-page'
})
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
 
  homeRoot: any = HomePage;
  consoRoot: any = HelloPage;
  historicRoot:any = SpecialPage;
  notifRoot:any = ListPage;
  myIndex: number;

  hideNavBar:boolean = false;
 
  constructor(navParams: NavParams) {
    // Set the active tab based on the passed index from menu.ts
    this.myIndex = navParams.data.tabIndex || 0;
    this.hideNavBar = true;
  }


}
