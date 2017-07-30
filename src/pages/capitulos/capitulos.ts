import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';

import { CapitulosDetallePage } from '../capitulos-detalle/capitulos-detalle';

/**
 * Generated class for the CapitulosDetallePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-capitulos',
  templateUrl: 'capitulos.html',
})
export class CapitulosPage {
  aess={title:"IEEE AESS",imagen:"assets/images/capitulos/AESS.png",nombre:"IEEE Aerospace and Electronic Systems Society",web:"http://portal.uc3m.es/portal/page/portal/grupos_investigacion/giaa/links/CAPITULO_ESPANOL_DEL_IEEE_AESS",
  descrip1:"La Sociedad de Sistemas Electrónicos y Aeroespaciales del IEEE (Aerospace and Electronic Systems Society) es una organización sin ánimo de lucro cuyo fin es ayudar y promover la aplicación de la investigación en estas áreas.",
  descrip2:"El AESS está organizado en regiones que abarcan todo el mundo y dentro de cada una de las regiones, los paises se organizan en Capítulos. El Capítulo español del AESS fue fundado con el fin de mejorar la comunicación científica entre los diversos grupos del pais que trabajan en temas relativos a Sistemas Electrónicos y Aeroespaciales.",
  descrip3:"España es un pais con representativa tradición científica en este tema, como así lo demuestran los grupos de trabajo cuya investigación está enfocada a disciplinas relacionadas."};


  bts={title:"IEEE BTS",imagen:"assets/images/capitulos/BTS.png",nombre:"IEEE Broadcast Technology Society",web:"http://bts.ieee.org/",descrip1:"capitulo encargado de X"};
  
  cas={title:"IEEE CAS",imagen:"assets/images/capitulos/CAS.png",nombre:"IEEE Circuits and Systems Society",web:"http://cass.ieeespain.org/",descrip:"capitulo encargado de X"};
  
  cis={title:"IEEE CIS",imagen:"assets/images/capitulos/CIS.png",nombre:"IEEE Computational Intelligence Society",web:"http://cis.ieee.org/",descrip:"capitulo encargado de X"};
  
  cs={title:"IEEE Computer Society",imagen:"assets/images/capitulos/CS.png",nombre:"IEEE Computer Society",web:"http://ieeecomputer.ieeespain.org/",descrip:"capitulo encargado de X"};
  ces={title:"IEEE CESOC",imagen:"assets/images/capitulos/CES.png",nombre:"IEEE Consumer Electronics Society",web:"http://cesoc.ieee.org/",descrip:"capitulo encargado de X"};
  
  edus={title:"IEEE Education Society",imagen:"assets/images/capitulos/EDUS.png",nombre:"IEEE Education Society",web:"http://www.ieec.uned.es/es/",descrip:"capitulo encargado de X"};
  
  emc={title:"IEEE EMC",imagen:"assets/images/capitulos/EMC.png",nombre:"IEEE Electromagnetic Compatibility Society",web:"http://www.emcs.org/",descrip:"capitulo encargado de X"};
  
  eds={title:"IEEE EDS",imagen:"assets/images/capitulos/EDS.png",nombre:"IEEE Electron Devices Society",web:"http://eds.ieee.org/",descrip:"capitulo encargado de X"};
  
  grss={title:"IEEE GRSS",imagen:"assets/images/capitulos/GRSS.png",nombre:"IEEE Geoscience and Remote Sensing Society",web:"https://www.grss-ieee.org/",descrip:"capitulo encargado de X"};
  
  its={title:"IEEE ITS",imagen:"assets/images/capitulos/ITS.png",nombre:"IEEE Information Theory Society",web:"http://www.itsoc.org/people/chapters/spain-chapter",descrip:"capitulo encargado de X"};
  
  itss={title:"IEEE ITSS",imagen:"assets/images/capitulos/ITSS.png",nombre:"IEEE Intelligent Transportation Systems Society",web:"https://www.ieee-itss.org/",descrip:"capitulo encargado de X"};
  
  mags={title:"IEEE Magnetics Society",imagen:"assets/images/capitulos/MAGS.png",nombre:"IEEE Magnetics Society",web:"http://www.ieeemagnetics.org/",descrip:"capitulo encargado de X"};
  
  oes={title:"IEEE OES",imagen:"assets/images/capitulos/OES.png",nombre:"IEEE Oceanic Engineering Society",web:"http://www.upc.edu/cdsarti/MarInTech/",descrip:"capitulo encargado de X"}; 
  

  
  constructor(public navCtrl: NavController,private alertCtrl: AlertController) {
  }

  newChapter(titulo){
	this.navCtrl.push(CapitulosDetallePage,titulo);
  }

}
