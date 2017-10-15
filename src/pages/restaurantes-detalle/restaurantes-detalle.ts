import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RestaurantesDetallePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-restaurantes-detalle',
  templateUrl: 'restaurantes-detalle.html',
})
export class RestaurantesDetallePage {
  public title;
  public imagen;
  public descripcion;
  mapURL="";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title=navParams.get('title');
    this.imagen=navParams.get('imagen');
    this.descripcion=navParams.get('descripcion');    
    this.mapURL=navParams.get('mapURL');
  }

  openURL(url){
    window.open(url,'_system');
  }

}
