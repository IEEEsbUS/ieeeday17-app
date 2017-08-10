import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {HTTP} from '@ionic-native/http';
import { Toast } from '@ionic-native/toast';

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

  constructor(public navCtrl: NavController,private http:HTTP,private toast: Toast,public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.consultar();
  }

  
  consultar(){
    this.http.get('http://miguelmerelo.es/ieeeday/ranking.php',{},{}).then(data => {
      this.rellenaTabla(data.data);
    })
    .catch(error => {
       this.toast.show('Problema de conexión', '5000', 'center').subscribe(
         toast => {
    	   console.log(toast);
  	 }
       );
       
       console.log(error.status);
       console.log(error.error); // error message as string
       console.log(error.headers);
       this.navCtrl.pop();
     });
  }

  rellenaTabla(data){
    var resp=data.split('}');
    var nEquipos=resp.length-1;

    var tabla=[];
      
    var i=0;
    for(i=0;i<nEquipos;i++){
      var resp1=resp[i].split(',');
      if(i==0){
        var nombre=resp1[0].split(':')[1].split('\"')[1];
	var nMisiones=resp1[2].split(':')[1].split('\"')[1];
	var tiempo=resp1[1].split(':')[1].split('\"')[1];
      }else{
	var nombre=resp1[1].split(':')[1].split('\"')[1];
	var nMisiones=resp1[3].split(':')[1].split('\"')[1];
	var tiempo=resp1[2].split(':')[1].split('\"')[1];
      }
	
      var tabAux=[nombre,parseInt(nMisiones),parseInt(tiempo)];
      tabla[i]=tabAux;
    }
      
    tabla = tabla.sort(function(a,b) {
      return b[2] - a[2];
    });
      
    var tablaHTML=document.getElementById("clasi");
      
    for (i = 0; i < nEquipos; i++) {
      var tr = document.createElement('tr');
      for (var j = 0; j < 3; j++) {
        var td = document.createElement('td');
        td.innerHTML=tabla[i][j];
        tr.appendChild(td);
      }
      tablaHTML.appendChild(tr);
    }
  }
}
