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

  constructor(public navCtrl: NavController, public navParams: NavParams,private nativeAudio: NativeAudio) {
    this.nativeAudio.preloadSimple('alerta', 'assets/sounds/alerta.mp3');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QueesPage');
  }

  reproducir(){
    this.nativeAudio.play('alerta');
  }

  sonido(){
    var cuadro=document.getElementById("cuadro");
    cuadro.style.animationPlayState="running";
    setTimeout(this.reproducir(), 500);
    setTimeout(function(){
      cuadro.style.display="none";
    }, 2500);
  }
}
