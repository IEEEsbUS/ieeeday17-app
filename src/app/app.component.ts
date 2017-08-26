import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/Inicio/inicio';
import { AgendaPage } from '../pages/agenda/agenda';
import { RamasIEEE } from '../pages/ramas-ieee/ramas-ieee';
import { CapitulosPage } from '../pages/capitulos/capitulos';
import { YoungprofessionalsPage } from '../pages/youngprofessionals/youngprofessionals';
import { QueesPage } from '../pages/quees/quees';
import { PremiosPage } from '../pages/premios/premios';
import { GymkhanaPage } from '../pages/gymkhana/gymkhana';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: HomePage },
      { title: '¿Qué es IEEE?', component: QueesPage},
      { title: 'Agenda', component: AgendaPage},
      { title: 'Premios 2017', component: PremiosPage},
      { title: 'Ramas', component: RamasIEEE},
      { title: 'Capitulos', component: CapitulosPage},
      { title: 'Young Professionals', component: YoungprofessionalsPage},
      { title: 'Gymkhana', component: GymkhanaPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
