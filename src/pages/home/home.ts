import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RoomPage } from '../room/room';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  joinChat() {
    this.navCtrl.setRoot(RoomPage, {
      nickname:this.navParams.get("nickname")
    });
  }
}