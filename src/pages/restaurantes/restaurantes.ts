import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { List } from 'ionic-angular';

import {HTTP} from '@ionic-native/http';
import {Storage} from '@ionic/storage';
import { RestaurantesDetallePage } from './../restaurantes-detalle/restaurantes-detalle';
/**
 * Generated class for the RestaurantesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// @IonicPage()
@Component({
  selector: 'page-restaurantes',
  templateUrl: 'restaurantes.html',
})
export class RestaurantesPage {
  Cacharreria={title:"Cacharreria Desayunos",imagen:"assets/images/restaurantes/cacharreria.jpeg",descripcion:"Acogedor café decorado con objetos singulares que sirve cócteles, desayunos dulces y salados y tartas caseras",mapURL:"https://maps.google.com/?cid=13606624606783574085"};
  Gallo={title:"Gallo Rojo",imagen:"assets/images/restaurantes/gallo_rojo.jpg",descripcion:"Al mismo tiempo es una cervecería, una galería de arte, un espacio para conciertos o una factoría de creación, como ellos mismos se autodenominan",mapURL:"https://goo.gl/maps/yyZj9QrWChN2"};
  RedHouse={title:"Café Red House",imagen:"assets/images/restaurantes/redhouse.jpg",descripcion:"Bar, cafetería, galería de arte, tienda de decoración y objetos vintage y espacio cultural",mapURL:"https://goo.gl/maps/BfY8w5fGcJC2"};
  Viajero={title:"El Viajero Sedentario",imagen:"assets/images/restaurantes/el-viajero-sedentario.jpg",descripcion:"Librería café situada en la Alameda de Hércules, en la que puedes tomar un té, un rico café de estilo italiano o un zumo de frutas frescas al mismo tiempo que disfrutas leyendo uno de los libros de su fondo bibliográfico",mapURL:"https://goo.gl/maps/gk3q7fWs26S2"};
  EBio={title:"Heladería Puro E Bio",imagen:"assets/images/restaurantes/ebio.jpg",descripcion:"Helados artesanales y de elaboración diaria, hechos con materias primas bio y ecológicas",mapURL:"https://goo.gl/maps/Z9EHbzhzTZo"};
  
  Alameda={title:"Zona Alameda",imagen:"assets/images/restaurantes/alameda.jpg",descripcion:"Zona de bares de tapas, con mucha variedad de pubs donde tomas una copa y con salas para ir a bailar. En este barrio tienes al alcance de la mano todo lo que puedes necesitar desde la cena, hasta la copa y el baile",mapURL:"https://goo.gl/maps/T8YJJ86f3Yy"};
  Bombay={title:"Kiosko Bombay",imagen:"assets/images/restaurantes/kiosko_bombay.jpeg",descripcion:"Buena música, un ambiente de categoría en un entorno turístico maravilloso y unos cócteles de primera",mapURL:"https://goo.gl/maps/8AR3ke6b3ex"};
  Alfalfa={title:"Zona Alfalfa",imagen:"assets/images/restaurantes/alfalfa.jpg",descripcion:"Principal destino de estudiantes erasmus donde se encuentran pequeños bares de copas con mucha personalidad en los que se beben copas tanto dentro como fuera de los establecimientos. Entre los más populares de la zona está el Sopa de Ganso o el Berlín, sitios con buena música y ambiente para disfrutar de la noche sevillana",mapURL:"https://goo.gl/maps/qxDAvwMZnRE2"};

  DuoTapas={title:"Dúo Tapas",imagen:"assets/images/restaurantes/duotapas.png",descripcion:"Muy buena comida, barato. Con 2-3 tapas comes",mapURL:"https://goo.gl/maps/NGV8swz4cAs"};
  MesonSerranito={title:"Mesón Serranito",imagen:"assets/images/restaurantes/mesonserranito.jpg",descripcion:"Bocatas de jamón serrano y tapas variadas en una taberna decorada con bustos de toro y carteles de corridas",mapURL:"https://goo.gl/maps/pN3sHeKKiiH2"};
  Coloniales1={title:"Taberna Coloniales. Setas",imagen:"assets/images/restaurantes/coloniales.jpg",descripcion:"Tapas y recetas españolas en un concurrido mesón andaluz con azulejos pintados, alacenas de madera y terraza",mapURL:"https://goo.gl/maps/jpP2XcLuX3E2"};
  Coloniales2={title:"Taberna Coloniales. Catedral",imagen:"assets/images/restaurantes/coloniales.jpg",descripcion:"Tapas y recetas españolas en un concurrido mesón andaluz con azulejos pintados, alacenas de madera y terraza",mapURL:"https://goo.gl/maps/hEnUCdEKNMx"};

  shownGroup = null;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  newPub(titulo){
    this.navCtrl.push(RestaurantesDetallePage,titulo);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantesPage');
  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
  };

  isGroupShown(group) {
      return this.shownGroup === group;
  };

}
