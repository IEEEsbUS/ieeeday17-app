import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

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
  public cuenta=0;

  constructor(public navCtrl: NavController, public navParams: NavParams,private nativeAudio: NativeAudio) {
    this.nativeAudio.preloadSimple('alerta', 'assets/sounds/alerta.mp3');
    this.cuenta=0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad YoungprofessionalsPage');
  }

  openURL(url){
    window.open(url,'_system');
  }

  clickFoto(){
    this.cuenta++;
    if(this.cuenta==5)
      this.sonido();
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
}
