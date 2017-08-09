import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RamasDetalle } from '../ramas-detalle/ramas-detalle';
import { CapitulosDetallePage } from '../capitulos-detalle/capitulos-detalle';

/**
 * Generated class for the PremiosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-premios',
  templateUrl: 'premios.html',
})
export class PremiosPage {
  sbUMH={title:"UMH",imagen:"assets/images/ramas/ieeeUMH.png",ciudad:"Universidad Miguel Hernández",twitter:"ieeesbumh",facebook:"ieeesbumh",instagram:"ieeesbumh",web:"http://umh.ieeespain.org/"};
  sbUV={title:"UV",imagen:"assets/images/ramas/ieeeUV.png",ciudad:"Universidad de Valencia",twitter:"ieeesbuv",facebook:"IEEEsbUV",web:"http://ieee.uv.es/index"};


  aess={title:"IEEE AESS",imagen:"assets/images/capitulos/AESS.png",nombre:"IEEE Aerospace and Electronic Systems Society",web:"http://portal.uc3m.es/portal/page/portal/grupos_investigacion/giaa/links/CAPITULO_ESPANOL_DEL_IEEE_AESS",
  descrip1:"La Sociedad de Sistemas Electrónicos y Aeroespaciales del IEEE (Aerospace and Electronic Systems Society) es una organización sin ánimo de lucro cuyo fin es ayudar y promover la aplicación de la investigación en estas áreas.",
  descrip2:"El AESS está organizado en regiones que abarcan todo el mundo y dentro de cada una de las regiones, los paises se organizan en Capítulos. El Capítulo español del AESS fue fundado con el fin de mejorar la comunicación científica entre los diversos grupos del pais que trabajan en temas relativos a Sistemas Electrónicos y Aeroespaciales.",
  descrip3:"España es un pais con representativa tradición científica en este tema, como así lo demuestran los grupos de trabajo cuya investigación está enfocada a disciplinas relacionadas."};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  newBranch(titulo){
	this.navCtrl.push(RamasDetalle,titulo);
  }

  newChapter(titulo){
	this.navCtrl.push(CapitulosDetallePage,titulo);
  }

}
