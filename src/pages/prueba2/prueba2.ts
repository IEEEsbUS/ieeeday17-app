import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {HTTP} from '@ionic-native/http';
import {Storage} from '@ionic/storage';

/**
 * Generated class for the Prueba2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 
@Component({
  selector: 'page-prueba2',
  templateUrl: 'prueba2.html',
})
export class Prueba2Page {
  public web="https://www.google.es/maps/place/37°23'22.2\"N+5°59'24.7\"W/@37.3894606,-5.9912179";
  descripcion="";
  respuesta='';
  equipo="";
  clave="";
  nMision=2;
  

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

    this.storage.get('prueba2def').then((val)=>{
      if(val!=null){
        this.descripcion=this.traducir(val);
      }
    });

    this.storage.get('pruebaIni').then((val)=>{
      prIni=val;
        this.storage.get('pruebaAct').then((val2)=>{
          prAct=val2;


	  this.storage.get('fin').then((val3)=>{
      	    if(val3!=null){
	      this.storage.set('prueba2res',"ok");
              this.storage.set('prueba2Ini',"ok");
      	    }else{
    	      if(prIni<=prAct&&prIni<=2&&2<prAct){
      	        this.storage.set('prueba2Ini',"ok");
      	        this.storage.set('prueba2res',"ok");
    	      }else if(prIni>prAct&&(2<prAct||2>=prIni)){
     	        this.storage.set('prueba2res',"ok");
      	        this.storage.set('prueba2Ini',"ok");
    	      }
	    }

    	    this.storage.get('prueba2Ini').then((val)=>{
      	      if(val==null){
                document.getElementById("inicio").style.display="inline";
              	document.getElementById("contenido").style.display="none";
	      	document.getElementById("desafio").style.display="none";
      	      }else{
                document.getElementById("inicio").style.display="none";
	
		this.storage.get('prueba2res').then((val)=>{
              	  if(val==null){
                    document.getElementById("desafio").style.display="inline";
            	    document.getElementById("contenido").style.display="none";
	    	    document.getElementById("descrReto").innerHTML=this.descripcion;
            	    document.getElementById("error").style.display="none";
       	      	  }else{
                    document.getElementById("contenido").style.display="inline";
		    document.getElementById("desafio").style.display="none";
	    	    document.getElementById("correcto").style.display="none";var fr="a\u00f1o ÁçÇññ¿?!¡";
    fr=this.traducir(fr);
    document.getElementById("fr").innerHTML=fr;
              	  }
            	});
      	      }
    	    });
    	  });
        });
      });
  }


  consulta(){
    this.http.get('http://miguelmerelo.es/ieeeday/respuesta.php?respuesta='+this.respuesta+'&equipo='+this.equipo+'&clave='+this.clave+'&prueba='+this.nMision,{},{}).then(data => {
      var status=data.data.split('}')[0].split(':')[1].split("\"")[1];
      if(status.localeCompare("ok")==0){
	this.storage.set('prueba2res',"si");
	this.storage.set('pruebaAct',this.nMision+1+"");

	document.getElementById("desafio").style.display="none";
	document.getElementById("contenido").style.display="inline";
	document.getElementById("correcto").style.display="inline";
      }else if(status.localeCompare("fin")==0){
	this.storage.set('prueba2res',"si");
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
      this.storage.set("prueba2def",descr);
      this.storage.set('prueba2Ini',"si");
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
