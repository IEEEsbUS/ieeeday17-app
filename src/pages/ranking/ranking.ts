import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

import {HTTP} from '@ionic-native/http';
import {Storage} from '@ionic/storage';

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
  equipo="";
  posicion=0;
  finalizado=0;

  constructor(public navCtrl: NavController,private http:HTTP,private storage:Storage,public navParams: NavParams,private nativeAudio: NativeAudio) {
    this.nativeAudio.preloadSimple('alerta', 'assets/sounds/alerta.mp3');
  }

  ionViewDidLoad() {
    this.storage.get('equipo').then((val) =>{
      if(val==null){
      
      }else{
        console.log('equipo ',val);
	this.equipo=val;
      }
      this.consultar();
    });
  }

  refrescar(){
    var list=document.getElementById("clasi");
    var num=document.getElementsByTagName("tr").length;

    this.finalizado=0;
    this.posicion=0;
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
      var nombre="";
      var nMisiones="";
      var tiempo="";
      if(i==0){
        nombre=resp1[0].split(':')[1].split('\"')[1];
	nMisiones=resp1[2].split(':')[1].split('\"')[1];
	tiempo=resp1[1].split(':')[1].split('\"')[1];
      }else{
	nombre=resp1[1].split(':')[1].split('\"')[1];
	nMisiones=resp1[3].split(':')[1].split('\"')[1];
	tiempo=resp1[2].split(':')[1].split('\"')[1];
      }
      if(parseInt(nMisiones)==10)
        this.finalizado++;
      var tabAux=[nombre,parseInt(nMisiones),parseFloat(tiempo)/1000];
      tabla[i]=tabAux;
    }
      
    tabla = tabla.sort(function(a,b) {
      if(a[1]==b[1])
        return (a[2] < b[2]) ? -1 : (a[2] > b[2]) ? 1 : 0;
      else
	return (a[1]>b[1]) ? -1 : 1;
    });
      
    var tablaHTML=document.getElementById("clasi");
      
    for (i = 0; i < nEquipos; i++) {
      var tr = document.createElement('tr');
      var td = document.createElement('td');
      var pos=i+1;
      td.innerHTML=""+pos;
      td.style.width="10%";
      tr.appendChild(td);
      if(this.equipo.toLowerCase().localeCompare(tabla[i][0].toLowerCase())==0)
	this.posicion=pos;
      for (var j = 0; j < 3; j++) {
        td = document.createElement('td');
        td.innerHTML=tabla[i][j];
        tr.appendChild(td);
      }
      tablaHTML.appendChild(tr);
    }
    if(this.finalizado==nEquipos&&this.posicion==1)
      this.sonido();
    document.getElementById("error").style.display="inline";
  }

  reproducir(){
    this.nativeAudio.play('alerta');
  }

  sonido(){
    var cuadro=document.getElementById("cuadro");
    cuadro.style.animationName="cuadro";
    cuadro.style.webkitAnimationName="cuadro";
    cuadro.style.display="inline";
    setTimeout(this.reproducir(), 500);
    setTimeout(function(){
      cuadro.style.display="none";
    }, 2500);
  }
}
