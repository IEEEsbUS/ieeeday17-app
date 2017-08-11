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

  ionViewDidLoad() {
    this.consultar();
  }

  refrescar(){
    var list=document.getElementById("clasi");
    var num=document.getElementsByTagName("tr").length;

    for(var i=num-1;i>1;i--){
      list.removeChild(list.childNodes[i]);
    }
    this.consultar();
  }
  
  consultar(){
    this.http.get('http://miguelmerelo.es/ieeeday/ranking.php',{},{}).then(data => {
      this.rellenaTabla(data.data);
      document.getElementById("error").innerHTML="";
    })
    .catch(error => {
       document.getElementById("error").innerHTML="Error de conexión";
       
       console.log(error.status);
       console.log(error.error); // error message as string
       console.log(error.headers);
       //this.navCtrl.pop();
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
	
      var tabAux=[nombre,parseInt(nMisiones),parseFloat(tiempo)/1000];
      tabla[i]=tabAux;
    }
      
    tabla = tabla.sort(function(a,b) {
      return a[2] - b[2];
    });
      
    var tablaHTML=document.getElementById("clasi");
      
    for (i = 0; i < nEquipos; i++) {
      var tr = document.createElement('tr');
      var td = document.createElement('td');
      var pos=i+1;
      td.innerHTML=""+pos;
      tr.appendChild(td);
      for (var j = 0; j < 3; j++) {
        var td = document.createElement('td');
        td.innerHTML=tabla[i][j];
        tr.appendChild(td);
      }
      tablaHTML.appendChild(tr);
    }
  }
}
