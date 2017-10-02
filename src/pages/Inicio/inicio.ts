import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'inicio.html'
})
export class HomePage {
  public caixa="https://obrasociallacaixa.org/es/";
  public caixa2="https://www.google.es/maps/place/CaixaForum+Sevilla/@37.393732,-6.0105433,18z/data=!4m5!3m4!1s0x0:0xc7ddaa6b65a846aa!8m2!3d37.3931002!4d-6.0104428";
  public hotel="https://www.google.es/maps/place/Barcel%C3%B3+Sevilla+Renacimiento/@37.4097606,-5.9959543,18.27z";

  constructor(public navCtrl: NavController) {

  }

  openURL(url){
    window.open(url,'_system');
  }
}
