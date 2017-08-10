import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {HTTP} from '@ionic-native/http';

/**
 * Generated class for the RankingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-ranking',
  templateUrl: 'ranking.html',
})
export class RankingPage {

  constructor(public navCtrl: NavController,private http:HTTP,public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.consultar();
  }

  
  consultar(){
    this.http.get('http://miguelmerelo.es/ieeeday/ranking.php',{},{}).then(data => {
      document.getElementById("respuesta").innerHTML=data.data;
    })
    .catch(error => {

       console.log(error.status);
       console.log(error.error); // error message as string
       console.log(error.headers);

     });
  }
}
