import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuPage } from './menu';
import {TabsPage} from "../tabs/tabs";
import {ListPage} from "../list/list";
import {Tab1Page} from "../tab1/tab1";
import {Tab2Page} from "../tab2/tab2";
import {HomePage} from "../home/home";
import {SpecialPage} from "../special/special";
import {HelloPage} from "../hello/hello";
import {TabsheadPage} from "../tabshead/tabshead";

@NgModule({
  declarations: [
    MenuPage,
    TabsPage,
    Tab1Page,
    Tab2Page,
    SpecialPage,
    HomePage,
    HelloPage,
    ListPage,
    TabsheadPage
  ],
  imports: [
    IonicPageModule.forChild(MenuPage),
  ],
  exports: [
    MenuPage,
    TabsPage,
    Tab1Page,
    Tab2Page,
    SpecialPage,
    HomePage,
    HelloPage,
    ListPage,
    TabsheadPage
  ],
})
export class MenuPageModule {}
