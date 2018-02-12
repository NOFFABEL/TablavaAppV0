import {Component, ViewChild} from '@angular/core';
import {Nav, NavController, NavParams} from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HomePage} from "../home/home";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  authForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.authForm = formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(8), Validators.maxLength(30)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onSubmit(value: any): void {
    if(this.authForm.valid) {
      window.localStorage.setItem('username', value.username);
      window.localStorage.setItem('password', value.password);
      this.navCtrl.setRoot(MenuPage);
      this.navCtrl.popToRoot();
    }
  }

  doLogin() {
    this.navCtrl.setRoot(MenuPage);
    this.navCtrl.popToRoot();
  }

}
