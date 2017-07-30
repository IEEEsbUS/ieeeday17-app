import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CapitulosDetallePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-capitulos-detalle',
  templateUrl: 'capitulos-detalle.html',
})
export class CapitulosDetallePage {
  public title;
  public imagen;
  public nombre;
  public web;
  public descrip1;
  public descrip2;
  public descrip3;
  public descrip4;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title=navParams.get('title');
    this.imagen=navParams.get('imagen');
    this.nombre=navParams.get('nombre');
    this.web=navParams.get('web');
    this.descrip1=navParams.get('descrip1');
    this.descrip2=navParams.get('descrip2');
    this.descrip3=navParams.get('descrip3');
    this.descrip4=navParams.get('descrip4');
  }

  openURL(url){
    window.open(url,'_system');
  }

}
