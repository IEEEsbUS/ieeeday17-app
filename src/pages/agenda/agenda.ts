import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {
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
  }
}