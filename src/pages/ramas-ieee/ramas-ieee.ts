import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

import { RamasDetalle } from '../ramas-detalle/ramas-detalle';

/**
 * Generated class for the RamasIEEE page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-ramas-ieee',
  templateUrl: 'ramas-ieee.html',
})
export class RamasIEEE {
  sbUAH={title:"UAH",imagen:"assets/images/ramas/ieeeUAH.png",ciudad:"Universidad de Alcalá",twitter:"IEEEsbUAH",facebook:"Rama-del-IEEE-de-la-Universidad-de-Alcalá-262372793821166/",web:"http://www.ieeeuah.org"};
  
  sbUA={title:"UA",imagen:"assets/images/ramas/ieeeUA.png",ciudad:"Universidad de Alicante",twitter:"ieee_sbua",facebook:"ieeeuasb",instagram:"ieee_sbua",web:"http://sites.ieee.org/sb-alicante/es/inicio/"};
  
  //sbUC3M={title:"UC3M",imagen:"assets/images/ramas/ieeeUC3M.png",ciudad:"Universidad Carlos III de Madrid",twitter:"asrob_uc3m",facebook:"asrobuc3m",web:"http://asrob.uc3m.es/index.php/Main_Page"};
  
  sbUGR={title:"UGR",imagen:"assets/images/ramas/ieeeUGR.png",ciudad:"Universidad de Granada",twitter:"ieeegranada",facebook:"IEEEGranada",web:"http://sites.ieee.org/sb-ugr/"};
  
  sbUMA={title:"UMA",imagen:"assets/images/ramas/ieeeUMA.png",ciudad:"Universidad de Málaga",web:"http://ieee.etsit.uma.es/",twitter:"ieeesbuma",facebook:"IeeeSbUma"};
  
  sbUMH={title:"UMH",imagen:"assets/images/ramas/ieeeUMH.png",ciudad:"Universidad Miguel Hernández",twitter:"ieeesbumh",facebook:"ieeesbumh",instagram:"ieeesbumh",web:"http://umh.ieeespain.org/"};
  sbUNED={title:"UNED",imagen:"assets/images/ramas/ieeeUNED.png",ciudad:"Universidad Nacional de Educación a Distancia",facebook:"IEEEsbUNED",web:"http://sites.ieee.org/sb-uned/"};
  
  sbUPCT={title:"UPCT",imagen:"assets/images/ramas/ieeeUPCT.png",ciudad:"Universidad Politécnica de Cartagena",twitter:"ieeesupct",facebook:"ieeeupct",instagram:"ieeeupct",web:"http://www.ieee.upct.es/"};
  
  sbBCN={title:"UPC",imagen:"assets/images/ramas/ieeeUBCN.png",ciudad:"Universidad Politécnica de Cataluña",twitter:"IEEE_SB_BCN",facebook:"IEEEBcnStudentBranch",instagram:"ieeebcnsb",web:"http://ieee.upc.edu/"};
  
  sbUPMN={title:"UPM",imagen:"assets/images/ramas/ieeeUPM.png",ciudad:"Universidad Politécnica de Madrid",twitter:"ieeesb",facebook:"IeeeSbMadrid",web:"http://ieeesb.es"};
  
  sbUPMS={title:"UPM SUR",imagen:"assets/images/ramas/ieeeUPMSUR.png",ciudad:"Universidad Politécnica de Madrid Sur",twitter:"aetel",facebook:"aetel.etsist",web:"http://aetel.etsist.upm.es/"};
  
  sbUPV={title:"UPV",imagen:"assets/images/ramas/ieeeUPV.png",ciudad:"Universidad Politécnica de Valencia",facebook:"ieeeupv"};
  
  sbURJC={title:"URJC",imagen:"assets/images/ramas/ieeeURJC.png",ciudad:"Universidad Rey Juan Carlos",twitter:"ieee_urjc_sb",facebook:"IEEE-URJC-Student-Branch-115794485163092",web:"https://ieeesb.etsit.urjc.es/"};
  
  sbUS={title:"US",imagen:"assets/images/ramas/ieeeUS.png",ciudad:"Universidad de Sevilla",twitter:"ieeesbus",facebook:"IEEESBUS",instagram:"ieeesbus",web:"http://sites.ieee.org/sb-us/"};
  
  sbUV={title:"UV",imagen:"assets/images/ramas/ieeeUV.png",ciudad:"Universidad de Valencia",twitter:"ieeesbuv",facebook:"IEEEsbUV",web:"http://ieee.uv.es/index"};
  
  sbUVigo={title:"UVIGO",imagen:"assets/images/ramas/ieeeUVigo.png",ciudad:"Universidad de Vigo",twitter:"IEEEuVigo",facebook:"ieeevigo"};
  
  sbUZ={title:"UNIZAR",imagen:"assets/images/ramas/ieeeUZ.png",ciudad:"Universidad de Zaragoza",twitter:"ieeesbuz",facebook:"IEEEsbUZ",web:"http://sites.ieee.org/sb-unizar/"};

  cuenta=0;
  

  constructor(public navCtrl: NavController,private alertCtrl: AlertController,private nativeAudio: NativeAudio) {
    this.nativeAudio.preloadSimple('alerta', 'assets/sounds/alerta.mp3');
    this.cuenta=0;
  }

  ionViewDidEnter(){
    if(this.cuenta==10)
	this.sonido();
  }

  newBranch(titulo){
	this.cuenta++;
	this.navCtrl.push(RamasDetalle,titulo);
  }

  reproducir(){
    this.nativeAudio.play('alerta');
  }

  sonido(){
    var cuadro=document.getElementById("cuadro");
    cuadro.style.animationName="cuadro";
    cuadro.style.webkitAnimationName="cuadro";
    cuadro.style.display="inline";
    //cuadro.style.webkitAnimationPlayState="running";
    setTimeout(this.reproducir(), 500);
    setTimeout(function(){
      cuadro.style.display="none";
    }, 2500);
  }

}
