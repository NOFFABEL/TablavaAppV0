import { Component } from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {MenuPage} from "../menu/menu";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    rootPage: any = MenuPage;
    isOn: boolean = false;
    timer: Timer = new Timer();
    progsForm: FormGroup;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public navParams: NavParams) {
      this.progsForm = new FormGroup({
          progs : new FormControl(),
      });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

    isRunning() {
        return this.isOn;
    }

    launch() {
        this.isOn = true;
        if(this.isOn) {
            this.toastCtrl.create({
                message: `Votre lave-vaisselle vient de démarrer`,
                duration: 2000
            }).present();
        }
        if(this.timer.minutes !== 0 || this.timer.secondes !== 0)
            this.timer.reset();
        this.timer.start();
        this.stopTimer();
    }

    stopTimer(){
        if(this.timer.minutes >= 30 && this.isOn) {
            this.timer.stop();
            this.isOn = false;
            this.toastCtrl.create({
                message: `Votre lave-vaisselle vient de s'arrêter après une durée de ${this.timer.duration} minutes`,
                duration: 2000
            }).present();
        }
    }

}

export class Timer {
    private _minutes: number = 0;
    private _secondes: number = 0;
    private _totalSecondes: number = 0;
    private _timer;
    get minutes(): number { return this._minutes; }
    get secondes(): number { return this._secondes; }
    get duration(): number { return this._timer; }
    start() {
        this._timer = setInterval(() => {
            this._minutes = Math.floor(++this._totalSecondes / 60);
            this._secondes = this._totalSecondes - this._minutes * 60;
        }, 1000);
    }
    stop() {
        clearInterval(this._timer);
    }
    reset() {
        this._totalSecondes = this._minutes = this._secondes = 0;
    }
}
