import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

import { RamasIEEE } from '../ramas-ieee/ramas-ieee';
import { YoungprofessionalsPage } from '../youngprofessionals/youngprofessionals';
import { CapitulosPage } from '../capitulos/capitulos';

/**
 * Generated class for the QueesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-quees',
  templateUrl: 'quees.html',
})
export class QueesPage {
  public cuenta=0;
  public ieee="https://www.ieee.org/membership_services/membership/join/index.html?WT.mc_id=hc_join";
  public ramas=RamasIEEE;
  public yp=YoungprofessionalsPage;
  public capitulos=CapitulosPage;

  constructor(public navCtrl: NavController, public navParams: NavParams,private nativeAudio: NativeAudio) {
    this.nativeAudio.preloadSimple('alerta', 'assets/sounds/alerta.mp3');
    this.cuenta=0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QueesPage');
  }

  openURL(url){
    window.open(url,'_system');
  }

  pagina(titulo){
	this.navCtrl.push(titulo);
  }
  
  reproducir(){
    this.nativeAudio.play('alerta');
  }

  sonido(){
    var cuadro=document.getElementById("cuadro");
    cuadro.style.animationName="cuadro";
    cuadro.style.webkitAnimationName="cuadro";
    cuadro.style.display="inline";
    //cuadro.style.webkitAnimationPlayState="running";
    setTimeout(this.reproducir(), 500);
    setTimeout(function(){
      cuadro.style.display="none";
    }, 2500);
  }

  clickTop(){
    this.cuenta++;
    if(this.cuenta==5)
      this.sonido();
  }
}
