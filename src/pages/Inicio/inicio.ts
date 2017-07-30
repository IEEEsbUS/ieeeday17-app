import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'inicio.html'
})
export class HomePage {
  public caixa="https://obrasociallacaixa.org/es/";
  
  constructor(public navCtrl: NavController) {

  }

  openURL(url){
    window.open(url,'_system');
  }
}
