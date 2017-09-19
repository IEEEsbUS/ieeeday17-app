import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the YoungprofessionalsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-youngprofessionals',
  templateUrl: 'youngprofessionals.html',
})
export class YoungprofessionalsPage {
  public yp="http://yp.ieee.org";
  public ypsp="https://www.facebook.com/ypspain/";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad YoungprofessionalsPage');
  }

  openURL(url){
    window.open(url,'_system');
  }
}
