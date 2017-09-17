import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,private nativeAudio: NativeAudio) {
    this.nativeAudio.preloadSimple('alerta', 'assets/sounds/alerta.mp3');
    this.cuenta=0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QueesPage');
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
