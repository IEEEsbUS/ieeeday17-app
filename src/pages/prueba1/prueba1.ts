import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {HTTP} from '@ionic-native/http';
import {Storage} from '@ionic/storage';

/**
 * Generated class for the Prueba1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 
@Component({
  selector: 'page-prueba1',
  templateUrl: 'prueba1.html',
})
export class Prueba1Page {
  public web="https://www.google.es/maps/place/37°23'09.1\"N+5°59'34.1\"W/@37.3858626,-5.9949905";
  descripcion="";
  respuesta='';
  equipo="";
  clave="";
  nMision=1;
  

  constructor(public navCtrl: NavController,private http:HTTP,private storage:Storage, public navParams: NavParams) {
    this.storage.get('validado').then((val)=>{
      if(val==null){
        this.navCtrl.pop();
      }
    });

    this.storage.get('equipo').then((val)=>{
      this.equipo=val;
    });
    this.storage.get('pass').then((val)=>{
      this.clave=val;
    });
  }

  ionViewWillLoad() {
    var prIni;
    var prAct;

    this.storage.get('prueba1def').then((val)=>{
      if(val!=null){
        this.descripcion=val;
      }
    });

    this.storage.get('pruebaIni').then((val)=>{
      prIni=val;
      this.storage.get('pruebaAct').then((val2)=>{
        prAct=val2;


	this.storage.get('fin').then((val3)=>{
      	  if(val3!=null){
	    this.storage.set('prueba1res',"ok");
            this.storage.set('prueba1Ini',"ok");
      	  }else{
    	    if(prIni<=prAct&&prIni==1&&1<prAct){
      	      this.storage.set('prueba1Ini',"ok");
      	      this.storage.set('prueba1res',"ok");
    	    }else if(prAct<prIni&&(1<prAct)){
     	      this.storage.set('prueba1res',"ok");
      	      this.storage.set('prueba1Ini',"ok");
    	    }
	    

    	    this.storage.get('prueba1Ini').then((val)=>{
      	      if(val==null){
                document.getElementById("inicio").style.display="inline";
                document.getElementById("contenido").style.display="none";
	        document.getElementById("desafio").style.display="none";
      	      }else{
                document.getElementById("inicio").style.display="none";
	
	        this.storage.get('prueba1res').then((val)=>{
                  if(val==null){
                    document.getElementById("desafio").style.display="inline";
            	    document.getElementById("contenido").style.display="none";
	    	    document.getElementById("descrReto").innerHTML=this.descripcion;
            	    document.getElementById("error").style.display="none";
       	    	  }else{
                    document.getElementById("contenido").style.display="inline";
	            document.getElementById("desafio").style.display="none";
	    	    document.getElementById("correcto").style.display="none";
              	  }
                });
      	      }
    	    });
	  }
        });
      });
    });
  }


  consulta(){
    this.http.get('http://miguelmerelo.es/ieeeday/respuesta.php?respuesta='+this.respuesta+'&equipo='+this.equipo+'&clave='+this.clave+'&prueba='+this.nMision,{},{}).then(data => {
      var status=data.data.split('}')[0].split(':')[1].split("\"")[1];
      if(status.localeCompare("ok")==0){
	this.storage.set('prueba1res',"si");
	this.storage.set('pruebaAct',this.nMision+1+"");

	document.getElementById("desafio").style.display="none";
	document.getElementById("contenido").style.display="inline";
	document.getElementById("correcto").style.display="inline";
      }else if(status.localeCompare("fin")==0){
	this.storage.set('prueba1res',"si");
        this.storage.set('fin',"si");

	document.getElementById("desafio").style.display="none";
	document.getElementById("contenido").style.display="inline";
	document.getElementById("correcto").style.display="inline";
      }else{
        document.getElementById("error").style.display="inline";
      }
    })
    .catch(error => {

       console.log(error.status);
       console.log(error.error); // error message as string
       console.log(error.headers);

     });
  }

  //comienza el desafio
  empezar(){
    this.http.get('http://miguelmerelo.es/ieeeday/iniciar.php?inicio=si&equipo='+this.equipo+'&clave='+this.clave+'&prueba='+this.nMision,{},{}).then(data => {
      var descr=data.data.split('}')[0].split(':')[1].split("\"")[1];
      descr=this.traducir(descr);
      this.storage.set("prueba1def",descr);
      this.storage.set('prueba1Ini',"si");
      this.descripcion=descr;

      document.getElementById("desafio").style.display="inline";
      document.getElementById("inicio").style.display="none";
      document.getElementById("contenido").style.display="none";
      document.getElementById("descrReto").innerHTML=this.descripcion;
      document.getElementById("error").style.display="none";
    })
    .catch(error => {

       console.log(error.status);
       console.log(error.error); // error message as string
       console.log(error.headers);

       
     });
    
  }

  openURL(url){
    window.open(url,'_system');
  }

  traducir(frase){
    var caracWeb=['\u00e1', '\u00c1', '\u00e9', '\u00c9', '\u00ed', '\u00cd', '\u00f3', '\u00d3', '\u00fa', '\u00da', '\u00fc', '\u00dc', '\u00f1', '\u00d1', '\u00e7', '\u00c7', '\u00bf', '\u00a1'];
    var caracOK=['á','Á','é','É','í','Í','ó','Ó','ú','Ú','ü','Ü','ñ','Ñ','ç','Ç','¿','¡'];
    var i=0;
    for(;i<caracWeb.length;i++)
      frase=frase.replace(caracWeb[i],caracOK[i]);
    return frase;
  }
}
