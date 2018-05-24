import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { LoginPage } from '../pages/login/login';

const config = {
  apiKey: 'AIzaSyAw7zS5TyBBmwgxpx6YXS05c6a98q4XPVU',
  authDomain: 'chatapp-6d67e.firebaseapp.com',
  databaseURL: 'https://chatapp-6d67e.firebaseio.com/',
  projectId: 'chatapp-6d67e',
  storageBucket: 'gs://chatapp-6d67e.appspot.com',
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}