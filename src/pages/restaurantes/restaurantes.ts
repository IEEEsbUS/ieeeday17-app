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
  // Desayunos
  Cacharreria={title:"Cacharreria Desayunos",imagen:"assets/images/restaurantes/cacharreria.jpeg",descripcion:"Acogedor café decorado con objetos singulares que sirve cócteles, desayunos dulces y salados y tartas caseras",mapURL:"https://maps.google.com/?cid=13606624606783574085"};
  Gallo={title:"Gallo Rojo",imagen:"assets/images/restaurantes/gallo_rojo.jpg",descripcion:"Al mismo tiempo es una cervecería, una galería de arte, un espacio para conciertos o una factoría de creación, como ellos mismos se autodenominan",mapURL:"https://goo.gl/maps/yyZj9QrWChN2"};
  RedHouse={title:"Café Red House",imagen:"assets/images/restaurantes/redhouse.jpg",descripcion:"Bar, cafetería, galería de arte, tienda de decoración y objetos vintage y espacio cultural",mapURL:"https://goo.gl/maps/BfY8w5fGcJC2"};
  Viajero={title:"El Viajero Sedentario",imagen:"assets/images/restaurantes/el-viajero-sedentario.jpg",descripcion:"Librería café situada en la Alameda de Hércules, en la que puedes tomar un té, un rico café de estilo italiano o un zumo de frutas frescas al mismo tiempo que disfrutas leyendo uno de los libros de su fondo bibliográfico",mapURL:"https://goo.gl/maps/gk3q7fWs26S2"};
  EBio={title:"Heladería Puro E Bio",imagen:"assets/images/restaurantes/ebio.jpg",descripcion:"Helados artesanales y de elaboración diaria, hechos con materias primas bio y ecológicas",mapURL:"https://goo.gl/maps/Z9EHbzhzTZo"};
    
  // Restaurantes
  DuoTapas={title:"Dúo Tapas",imagen:"assets/images/restaurantes/duotapas.png",descripcion:"Muy buena comida, barato. Con 2-3 tapas comes",mapURL:"https://goo.gl/maps/NGV8swz4cAs"};
  MesonSerranito={title:"Mesón Serranito",imagen:"assets/images/restaurantes/mesonserranito.jpg",descripcion:"Bocatas de jamón serrano y tapas variadas en una taberna decorada con bustos de toro y carteles de corridas",mapURL:"https://goo.gl/maps/pN3sHeKKiiH2"};
  Coloniales1={title:"Taberna Coloniales. Setas",imagen:"assets/images/restaurantes/coloniales.jpg",descripcion:"Tapas y recetas españolas en un concurrido mesón andaluz con azulejos pintados, alacenas de madera y terraza",mapURL:"https://goo.gl/maps/jpP2XcLuX3E2"};
  Coloniales2={title:"Taberna Coloniales. Catedral",imagen:"assets/images/restaurantes/coloniales.jpg",descripcion:"Tapas y recetas españolas en un concurrido mesón andaluz con azulejos pintados, alacenas de madera y terraza",mapURL:"https://goo.gl/maps/hEnUCdEKNMx"};
  Tragaldabas={title:"Tragaldabas",imagen:"assets/images/restaurantes/tragaldabas.jpg",descripcion:"Cocina andaluza, de calidad, sin trucos ni secretos... y con mucho sabor",mapURL:"https://goo.gl/maps/MqeiyD17PxM2"};
  Gaia={title:"Restaurante Ecovegetariano Gaia",imagen:"assets/images/restaurantes/gaia.jpg",descripcion:"Cocina vegetariana y refrescos ecológicos en un bar con detalle de azulejos en la barra y columnas de hierro",mapURL:"https://goo.gl/maps/Y3gKXMSfEfP2"};
  
  // Tapas
  Naciones={title:"Festival de las Naciones",imagen:"assets/images/restaurantes/festival-naciones.jpg",descripcion:"Comidas, coctelería y artesanía internacional. El recinto del festival abre sus puertas todos los días a partir de las 11.00 de la mañana hasta las 24.00 horas de lunes a jueves, Viernes y sábado y vísperas de festivos hasta la 01.00 horas y los domingos y festivos hasta las 24 horas.",mapURL:"https://goo.gl/maps/fsWrrcRfiWU2"};
  Ruperto={title:"Casa Ruperto",imagen:"assets/images/restaurantes/ruperto.jpg",descripcion:"Animado bar de barrio con terraza y barra de aluminio especializado en codornices fritas, tapas y montaditos",mapURL:"https://goo.gl/maps/zeYHWxiuXGp"};
  Almiranta={title:"Almiranta Tapas Restaurante",imagen:"assets/images/restaurantes/almiranta.jpg",descripcion:"Tapas y platos mediterráneos creativos en original y luminoso salón decorado con fotomurales y guirnaldas",mapURL:"https://goo.gl/maps/MohfUa5D86y"};
  SanEloy={title:"Patio San Eloy",imagen:"assets/images/restaurantes/saneloy.jpg",descripcion:"Clásico bar-restaurante con barra y mesas que sirve tapas, raciones y platos de cocina española tradicional",mapURL:"https://goo.gl/maps/GnP6q47Kj9J2"};
  Rock={title:"Vegan Alameda Rock",imagen:"assets/images/restaurantes/rock.jpg",descripcion:"Especialistas en tapas veganas, cerveza y rock and roll ",mapURL:"https://goo.gl/maps/DBkRFUyHuoD2"};
  // ZonaAlameda

  // Copas
  Alameda={title:"Zona Alameda",imagen:"assets/images/restaurantes/alameda.jpg",descripcion:"Zona de bares de tapas, con mucha variedad de pubs donde tomas una copa y con salas para ir a bailar. En este barrio tienes al alcance de la mano todo lo que puedes necesitar desde la cena, hasta la copa y el baile",mapURL:"https://goo.gl/maps/T8YJJ86f3Yy"};
  Bombay={title:"Kiosko Bombay",imagen:"assets/images/restaurantes/kiosko_bombay.jpeg",descripcion:"Buena música, un ambiente de categoría en un entorno turístico maravilloso y unos cócteles de primera",mapURL:"https://goo.gl/maps/8AR3ke6b3ex"};
  Alfalfa={title:"Zona Alfalfa",imagen:"assets/images/restaurantes/alfalfa.jpg",descripcion:"Principal destino de estudiantes erasmus donde se encuentran pequeños bares de copas con mucha personalidad en los que se beben copas tanto dentro como fuera de los establecimientos. Entre los más populares de la zona está el Sopa de Ganso o el Berlín, sitios con buena música y ambiente para disfrutar de la noche sevillana",mapURL:"https://goo.gl/maps/qxDAvwMZnRE2"};
  Julio={title:"Bar Julius",imagen:"assets/images/restaurantes/julio.jpg",descripcion:"Taberna tradicional sevillana de destino habitual para músicos de tuna universitaria. En pleno cento de Sevilla a los pies de la Giralda",mapURL:"https://goo.gl/maps/XWKbetDrFJs"};

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
