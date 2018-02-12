import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import {MenuPage} from "../menu/menu";

@NgModule({
  declarations: [
    LoginPage,
    MenuPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {}
