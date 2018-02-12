import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { MenuPage } from '../pages/menu/menu';
import { TabsPage } from '../pages/tabs/tabs';
import { Tab1Page } from '../pages/tab1/tab1';
import { Tab2Page } from '../pages/tab2/tab2';
import { SpecialPage } from '../pages/special/special';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HelloPage } from "../pages/hello/hello";
import { TabsheadPage } from "../pages/tabshead/tabshead";
import {WasherPage} from "../pages/washer/washer";

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    MenuPage,
    Tab1Page,
    Tab2Page,
    SpecialPage,
    HomePage,
    HelloPage,
    ListPage,
    TabsheadPage,
    WasherPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    MenuPage,
    Tab1Page,
    Tab2Page,
    SpecialPage,
    HomePage,
    ListPage,
    HelloPage,
    TabsheadPage,
    WasherPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
