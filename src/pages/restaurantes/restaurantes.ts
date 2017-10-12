import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { List } from 'ionic-angular';

import {HTTP} from '@ionic-native/http';
import {Storage} from '@ionic/storage';
import { RestaurantesDetallePage } from './../restaurantes-detalle/restaurantes-detalle';
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
  Alameda={title:"Zona Alameda",imagen:"assets/images/restaurantes/alameda.jpg",descripcion:"Descripción zona Alameda",mapURL:"https://maps.google.com/?cid=17427692181526125583"};
  Cacharreria={title:"Cacharreria",imagen:"assets/images/restaurantes/cacharreria.jpeg",descripcion:"Descripción Cacharrería",mapURL:"https://maps.google.com/?cid=13606624606783574085"};
  
  shownGroup = null;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  newPub(titulo){
    this.navCtrl.push(RestaurantesDetallePage,titulo);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantesPage');
  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
  };

  isGroupShown(group) {
      return this.shownGroup === group;
  };

}
