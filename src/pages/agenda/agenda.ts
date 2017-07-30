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
   if(dia==119){
	let alert = this.alertCtrl.create({
	    title: 'Viernes 19:00',
	    subTitle: 'Reunión de capítulos técnicos<br/><img src="assets/images/aess.png" width:50px/>',
	    buttons: ['OK']
    	});
	alert.present();
   }
   else if(dia==120){
   	let alert = this.alertCtrl.create({
	    title: 'Viernes 20:00',
	    subTitle: 'Otra cosa prueba de maxima capacidad para ver como REACCIONA ESTA MIERDA ASIQUE NANANAN BATAMAN Y BATMAN TAMBIEN',
	    buttons: ['OK']
    	});
	alert.present();
   }
   }
}