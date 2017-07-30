import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RamasDetalle page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-ramas-detalle',
  templateUrl: 'ramas-detalle.html',
})
export class RamasDetalle {
  public title;
  public imagen;
  public ciudad;
  public twitter;
  public facebook;
  public instagram;
  public web;
  public nRedes=0;

  public classFB;
  public classTW;
  public classInsta;

  clases=["ocultar","unaRed","dosRedes","tresRedes"];
  twitterURL="";
  facebookURL="";
  instagramURL="";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title=navParams.get('title');
    this.imagen=navParams.get('imagen');
    this.ciudad=navParams.get('ciudad');
    this.twitter=navParams.get('twitter');
    this.twitterURL="https://twitter.com/"+this.twitter;
    this.facebook=navParams.get('facebook');
    this.facebookURL="https://www.facebook.com/"+this.facebook;
    this.instagram=navParams.get('instagram');
    this.instagramURL="https://www.instagram.com/"+this.instagram;
    this.web=navParams.get('web');
    

    if(this.twitter!==undefined){
      this.nRedes++;
    }
    if(this.facebook!==undefined){
      this.nRedes++;
    }
    if(this.instagram!==undefined){
      this.nRedes++;
    }

    this.classFB=this.clases[this.nRedes];
    this.classTW=this.clases[this.nRedes];
    this.classInsta=this.clases[this.nRedes];
  }

  openURL(url){
    window.open(url,'_system');
  }

}
