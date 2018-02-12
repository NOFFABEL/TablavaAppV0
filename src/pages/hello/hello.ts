import { Component } from '@angular/core';
import {MenuController, NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";
import {MenuPage} from "../menu/menu";
import {TabsPage} from "../tabs/tabs";

@Component({
  selector: 'page-hello',
  templateUrl: 'hello.html',
})
export class HelloPage {
    num: number;
    noNext:boolean = false;

  constructor(public navCtrl: NavController, public menu: MenuController, public navParams: NavParams) {
      this.num=1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelloPage');
  }

  nextConso()
  {
      this.num++;
      if(this.num === 5)
          this.noNext = true;
  }

  backHome() {
      this.navCtrl.setRoot(TabsPage);
  }

}
