import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';

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
  sbUAH={title:"Universidad de Alcalá",imagen:"assets/images/ramas/ieeeUAH.png",ciudad:"Alcalá de Henares",twitter:"IEEEsbUAH",facebook:"Rama-del-IEEE-de-la-Universidad-de-Alcalá-262372793821166/",web:"http://www.ieeeuah.org"};
  sbUA={title:"Universidad de Alicante",imagen:"assets/images/ramas/ieeeUA.png",ciudad:"Alicante",twitter:"ieee_sbua",facebook:"ieeeuasb",web:"http://sites.ieee.org/sb-alicante/es/inicio/"};
  sbUC3M={title:"U. Carlos III de Madrid",imagen:"assets/images/ramas/ieeeUC3M.png",ciudad:"Madrid",twitter:"asrob_uc3m",facebook:"asrobuc3m",web:"http://asrob.uc3m.es/index.php/Main_Page"};
  sbUGR={title:"Universidad de Granada",imagen:"assets/images/ramas/ieeeUGR.png",ciudad:"Granada",twitter:"ieeegranada",facebook:"IEEEGranada",web:"http://sites.ieee.org/sb-ugr/"};
  sbUMA={title:"Universidad de Málaga",imagen:"assets/images/ramas/ieeeUMA.png",ciudad:"Málaga",web:"http://ieee.etsit.uma.es/",twitter:"ieeesbuma",facebook:"IeeeSbUma"};
  sbUMH={title:"Universidad Miguel Hernández",imagen:"assets/images/ramas/ieeeUMH.png",ciudad:"Elche",twitter:"ieeesbumh",facebook:"ieeesbumh",instagram:"ieeesbumh",web:"http://umh.ieeespain.org/"};
  sbUPCT={title:"U. P. Cartagena",imagen:"assets/images/ramas/ieeeUPCT.png",ciudad:"Cartagena",twitter:"ieeesupct",facebook:"ieeeupct",instagram:"ieeeupct",web:"http://www.ieee.upct.es/"};
  sbBCN={title:"U.P. de Cataluña",imagen:"assets/images/ramas/ieeeUBCN.png",ciudad:"Barcelona",twitter:"IEEE_SB_BCN",facebook:"IEEEBcnStudentBranch",web:"http://ieee.upc.edu/"};
  sbUPMN={title:"U. P. Madrid",imagen:"assets/images/ramas/ieeeUPM.png",ciudad:"Madrid",twitter:"ieeesb",facebook:"IeeeSbMadrid",web:"http://ieeesb.es"};
  sbUPMS={title:"U. P. Madrid Sur",imagen:"assets/images/ramas/ieeeUPMSUR.png",ciudad:"Madrid",twitter:"aetel",facebook:"aetel.etsist",web:"http://aetel.etsist.upm.es/"};
  sbUPV={title:"U.P. Valencia",imagen:"assets/images/ramas/ieeeUPV.png",ciudad:"Valencia",facebook:"ieeeupv"};
  sbURJC={title:"Universidad Rey Juan Carlos",imagen:"assets/images/ramas/ieeeURJC.png",ciudad:"Madrid",twitter:"ieee_urjc_sb",facebook:"IEEE-URJC-Student-Branch-115794485163092",web:"https://ieeesb.etsit.urjc.es/"};
  sbUS={title:"Universidad de Sevilla",imagen:"assets/images/ramas/ieeeUS.png",ciudad:"Sevilla",twitter:"ieeesbus",facebook:"IEEESBUS",web:"http://sites.ieee.org/sb-us/"};
  sbUV={title:"Universidad de Valencia",imagen:"assets/images/ramas/ieeeUV.png",ciudad:"Valencia",twitter:"ieeesbuv",facebook:"IEEEsbUV",web:"http://ieee.uv.es/index"};
  sbUVigo={title:"Universidad de Vigo",imagen:"assets/images/ramas/ieeeUVigo.png",ciudad:"Vigo",twitter:"IEEEuVigo",facebook:"ieeevigo"};
  sbUZ={title:"Universidad de Zaragoza",imagen:"assets/images/ramas/ieeeUZ.png",ciudad:"Zaragoza",twitter:"ieeesbuz",facebook:"IEEEsbUZ",web:"http://sites.ieee.org/sb-unizar/"};
  
  

  constructor(public navCtrl: NavController,private alertCtrl: AlertController) {
  }

  newBranch(titulo){
	this.navCtrl.push(RamasDetalle,titulo);
  }

}
