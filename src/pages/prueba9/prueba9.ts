import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {HTTP} from '@ionic-native/http';
import {Storage} from '@ionic/storage';

/**
 * Generated class for the Prueba9Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 
@Component({
  selector: 'page-prueba9',
  templateUrl: 'prueba9.html',
})
export class Prueba9Page {
  public web="https://www.google.es/maps/place/37°23'04.3\"N+5°59'31.9\"W/@37.3845351,-5.9943708";
  descripcion="";
  respuesta='';
  equipo="";
  clave="";
  nMision=9;
  

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

    this.storage.get('prueba9def').then((val)=>{
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
	      this.storage.set('prueba9res',"ok");
              this.storage.set('prueba9Ini',"ok");
      	    }else{
    	      if(prIni<=prAct&&prIni<=9&&9<prAct){
      	        this.storage.set('prueba9Ini',"ok");
      	        this.storage.set('prueba9res',"ok");
    	      }else if(prAct<prIni&&(9<prAct||9>=prIni)){
     	        this.storage.set('prueba9res',"ok");
      	        this.storage.set('prueba9Ini',"ok");
    	      }
	    }

    	    this.storage.get('prueba9Ini').then((val)=>{
      	      if(val==null){
                document.getElementById("inicio").style.display="inline";
              	document.getElementById("contenido").style.display="none";
	      	document.getElementById("desafio").style.display="none";
      	      }else{
                document.getElementById("inicio").style.display="none";
	
		this.storage.get('prueba9res').then((val)=>{
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
    	  });
        });
      });
  }


  consulta(){
    this.http.get('http://miguelmerelo.es/ieeeday/respuesta.php?respuesta='+this.respuesta+'&equipo='+this.equipo+'&clave='+this.clave+'&prueba='+this.nMision,{},{}).then(data => {
      var status=data.data.split('}')[0].split(':')[1].split("\"")[1];
      if(status.localeCompare("ok")==0){
	this.storage.set('prueba9res',"si");
	this.storage.set('pruebaAct',this.nMision+1+"");

	document.getElementById("desafio").style.display="none";
	document.getElementById("contenido").style.display="inline";
	document.getElementById("correcto").style.display="inline";
      }else if(status.localeCompare("fin")==0){
	this.storage.set('prueba9res',"si");
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
      this.storage.set("prueba9def",descr);
      this.storage.set('prueba9Ini',"si");
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

}
