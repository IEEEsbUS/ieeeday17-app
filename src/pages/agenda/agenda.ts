import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {
  public caixa="https://www.google.es/maps/place/CaixaForum+Sevilla/@37.393732,-6.0105433,18z/data=!4m5!3m4!1s0x0:0xc7ddaa6b65a846aa!8m2!3d37.3931002!4d-6.0104428";
  public hotel="https://www.google.es/maps/place/Barcel%C3%B3+Sevilla+Renacimiento/@37.4097606,-5.9959543,18.27z";
  agenda: string = "viernes";
  
  constructor(public alertCtrl: AlertController,public navCtrl: NavController) {
  	
  }

  showAlert(dia) {
    if(dia==1){
	let alert = this.alertCtrl.create({
	    title: 'Viernes 16:00',
	    subTitle: '<b>Presentación de IEEE y de la Sección Española</b><br/><br/>Explicación de lo que es IEEE y la Sección Española y de las tareas que llevan a cabo',
	    buttons: ['OK']
    	});
	alert.present();
    }
    else if(dia==2){
   	let alert = this.alertCtrl.create({
	    title: 'Viernes 17:00',
	    subTitle: '<b>Charla sobre Industry Networking</b><img src="assets/images/andreasNEUMEIER.jpg"/><b>Andreas Neumeier</b><br/>Manager  para la estrategia de IoT en OSRAM/Sylvania',
	    buttons: ['OK']
    	});
	alert.present();
    }
    else if(dia==3){
   	let alert = this.alertCtrl.create({
	    title: 'Viernes 18:00',
	    subTitle: '<b>Reconocimiento a miembros</b>',
	    buttons: ['OK']
    	});
	alert.present();
    }
    else if(dia==4){
   	let alert = this.alertCtrl.create({
	    title: 'Viernes 19:00',
	    subTitle: '<b>Panel debate sobre la industria en España</b>',
	    buttons: ['OK']
    	});
	alert.present();
    }
    else if(dia==5){
   	let alert = this.alertCtrl.create({
	    title: 'Viernes 19:45',
	    subTitle: '<b>Entrega de premios de la Sección Española</b>',
	    buttons: ['OK']
    	});
	alert.present();
    }
    else if(dia==10){
    	let alert = this.alertCtrl.create({
	    title: 'Sábado 8:30',
	    subTitle: '<b>Reunión de la junta directiva de la sección</b><br/><br/>Exclusivo para miembros de IEEE',
	    buttons: ['OK']
    	});
	alert.present();
    }
    else if(dia==11){
    	let alert = this.alertCtrl.create({
	    title: 'Sábado 11:00',
	    subTitle: '<b>Gymkhana</b><br/><br/>Gymkhana en la que conoceremos Sevilla.<br/><br/>Se cita a todos los participantes en <b>Plaza Nueva</b>',
	    buttons: ['OK']
    	});
	alert.present();
    }
    else if(dia==12){
    	let alert = this.alertCtrl.create({
	    title: 'Sábado 16:00',
	    subTitle: '<b>Jornadas de formación para las ramas de estudiantes</b><br/><br/>Exclusivo para miembros de IEEE',
	    buttons: ['OK']
    	});
	alert.present();
    }
    else if(dia==13){
    	let alert = this.alertCtrl.create({
	    title: 'Sábado 16:00',
	    subTitle: '<img src="assets/images/YPTourSevilla.png"/><br/><b>Mesa redonda & Networking con jóvenes profesionales</b><br/>Nos contarán su experiencia en el salto de la universidad al mundo laboral',
	    buttons: ['OK']
    	});
	alert.present();
    }
  }

  openURL(url){
    window.open(url,'_system');
  }
}