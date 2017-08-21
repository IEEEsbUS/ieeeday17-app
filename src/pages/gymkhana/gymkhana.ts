import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import {HTTP} from '@ionic-native/http';
import {Storage} from '@ionic/storage';

import { RankingPage } from '../ranking/ranking';

import { Prueba1Page } from '../prueba1/prueba1';
import { Prueba2Page } from '../prueba2/prueba2';
import { Prueba3Page } from '../prueba3/prueba3';
import { Prueba4Page } from '../prueba4/prueba4';
import { Prueba5Page } from '../prueba5/prueba5';
import { Prueba6Page } from '../prueba6/prueba6';
import { Prueba7Page } from '../prueba7/prueba7';
import { Prueba8Page } from '../prueba8/prueba8';
import { Prueba9Page } from '../prueba9/prueba9';
import { Prueba10Page } from '../prueba10/prueba10';

/**
 * Generated class for the GymkhanaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-gymkhana',
  templateUrl: 'gymkhana.html',
})
export class GymkhanaPage {
  datos=[];
  todo={equipo:'',pass:''};

  clasificacion=RankingPage;

  prueba1=Prueba1Page;
  prueba2=Prueba2Page;
  prueba3=Prueba3Page;
  prueba4=Prueba4Page;
  prueba5=Prueba5Page;
  prueba6=Prueba6Page;
  prueba7=Prueba7Page;
  prueba8=Prueba8Page;
  prueba9=Prueba9Page;
  prueba10=Prueba10Page;
  
  constructor(public navCtrl: NavController,private http:HTTP,private storage:Storage,private alertCtrl: AlertController) {
  }


  ionViewWillEnter() {
    this.storage.get('equipo').then((val) =>{
      if(val==null){
      
      }else{
        console.log('equipo ',val);
	this.todo['equipo']=val;
      }
    });
    
    this.storage.get('pass').then((val) =>{
      if(val==null){

      }else{
	this.todo['pass']=val;
      }
    });
    
    this.storage.get('validado').then((val)=>{
      if(val==null){
        document.getElementById("lista").style.display="none";
        document.getElementById("bloqueo").style.display="inline";
      }else{
	this.activarPruebas();
        document.getElementById("cabecera").innerHTML="Equipo: <b>"+this.todo['equipo'].toUpperCase()+"</b>";
	
	document.getElementById("bloqueo").style.display="none";
        document.getElementById("lista").style.display="inline";
      }
    });
    
    console.log('ionViewWillLoad GymkhanaPage');
  }


  editar(){
    this.storage.set('equipo',this.todo['equipo']);
    this.storage.set('pass',this.todo['pass']);

    this.http.get('http://miguelmerelo.es/ieeeday/actualizar.php?equipo='+this.todo['equipo']+"&pass="+this.todo['pass'],{},{}).then(data => {

       //respuesta JSON
       var resp=data.data.split('}')[0];
       var status=resp.split(',')[0].split(':')[1].split('\"')[1];

       var pruebaIni=resp.split(',')[1].split(':')[1].split('\"')[1];
       var pruebaAct=resp.split(',')[2].split(':')[1].split('\"')[1];

       var fin=resp.split(',')[3].split(':')[1].split('\"')[1];
       
       if(status.localeCompare("ok")==0){
         this.storage.set('validado',"ok");
	 this.storage.set('pruebaIni',pruebaIni);
	 this.storage.set('pruebaAct',pruebaAct);

	 if(fin.localeCompare("si")==0){
	   this.storage.set('fin',"ok");
	 }

         document.getElementById("cabecera").innerHTML="Equipo: <b>"+this.todo['equipo'].toUpperCase()+"</b>";
         document.getElementById("bloqueo").style.display="none";
	 document.getElementById("dat").style.display="none";

	 this.activarPruebas();
	 document.getElementById("lista").style.display="inline";
       }else{
         document.getElementById("dat").innerHTML="ERROR, el equipo y contraseña no son correctos.";
         document.getElementById("dat").style.display="inline";
       }
     })
     .catch(error => {

       document.getElementById("dat").innerHTML="Hay un fallo en la conexión con el servidor.";
       document.getElementById("dat").style.display="inline";
       console.log(error.status);
       console.log(error.error); // error message as string
       console.log(error.headers);

     });
  }


  nuevaAct(pagina){
	this.navCtrl.push(pagina);
  }


  activarPruebas(){
    var prAct;
    var prIni;
    var fin=0;

    var nodos=document.getElementById("lista").getElementsByClassName("list");
    
    this.storage.get('pruebaIni').then((val3)=>{
        prIni=parseInt(val3);
	
      this.storage.get('pruebaAct').then((val2)=>{
        prAct=parseInt(val2);
	
        
	this.storage.get('fin').then((val)=>{
	  if(val!=null){
            fin=1;
	    if(prIni==1){
	      this.storage.set('pruebaAct',nodos.length+"");
	      prAct=nodos.length;
	    }
	    else{
	      this.storage.set('pruebaAct',prIni-1+"");
	      prAct=prIni-1;
	    }
          }
          console.log("act:"+prAct+" ini:"+prIni);

          
   	  var i;

	  for(i=0;i<nodos.length;i++){
              (<HTMLInputElement>nodos[i].getElementsByClassName("img")[0]).setAttribute("src","assets/images/tickVerde.png");
      	  }
    
	  if(prAct>prIni){
       	    for(i=0;i<nodos.length;i++){
              (<HTMLInputElement>nodos[i]).style.display="none";
      	    }
      	    for(i=prIni-1;i<prAct;i++){
	      (<HTMLInputElement>nodos[i]).style.display="block";
      	    }
	    
      	    (<HTMLInputElement>nodos[prAct-1].getElementsByClassName("img")[0]).setAttribute("src","assets/images/tickVacio.png");
    	  }else if(prAct<prIni){
	    for(i=0;i<nodos.length;i++)
              (<HTMLInputElement>nodos[i]).style.display="block";
      	    for(i=prAct;i<prIni-1;i++){
              (<HTMLInputElement>nodos[i]).style.display="none";
      	    }
      	    (<HTMLInputElement>nodos[prAct-1].getElementsByClassName("img")[0]).setAttribute("src","assets/images/tickVacio.png");
    	  }else{
      	    for(i=0;i<nodos.length;i++){
              (<HTMLInputElement>nodos[i]).style.display="none";
      	    }
      	    (<HTMLInputElement>nodos[prAct-1]).style.display="block";
      	    (<HTMLInputElement>nodos[prAct-1].getElementsByClassName("img")[0]).setAttribute("src","assets/images/tickVacio.png");
    	  }
    	  if(fin==1){
      	    (<HTMLInputElement>nodos[prAct-1].getElementsByClassName("img")[0]).setAttribute("src","assets/images/tickVerde.png");
    	  }
    
	});
      });
    });
  }


  refrescar(){
    this.http.get('http://miguelmerelo.es/ieeeday/actualizar.php?equipo='+this.todo['equipo']+"&pass="+this.todo['pass'],{},{}).then(data => {

       //respuesta JSON con un unico valor
       var resp=data.data.split('}')[0];
       var status=resp.split(',')[0].split(':')[1].split('\"')[1];

       var pruebaIni=resp.split(',')[1].split(':')[1].split('\"')[1];
       var pruebaAct=resp.split(',')[2].split(':')[1].split('\"')[1];
       var fin=resp.split(',')[3].split(':')[1].split('\"')[1];
       
       if(status.localeCompare("ok")==0){
         this.storage.set('validado',"ok");
	 this.storage.set('pruebaIni',pruebaIni);
	 this.storage.set('pruebaAct',pruebaAct);

	 if(fin.localeCompare("si")==0){
	   this.storage.set('fin',"si");
	 }

	 this.activarPruebas();
       }
     })
     .catch(error => {

       console.log(error.status);
       console.log(error.error); // error message as string
       console.log(error.headers);

     });

  }

  reglas(){
    document.getElementById("lista").style.display="none";
    document.getElementById("reglas").style.display="inline";
  }

  cerrarReglas(){
    document.getElementById("reglas").style.display="none";
    document.getElementById("lista").style.display="inline";
  }
}
