import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {HTTP} from '@ionic-native/http';
import {Storage} from '@ionic/storage';
/**
 * Generated class for the RestaurantesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// @IonicPage()
@Component({
  selector: 'page-restaurantes',
  templateUrl: 'restaurantes.html',
})
export class RestaurantesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantesPage');
  }

}
