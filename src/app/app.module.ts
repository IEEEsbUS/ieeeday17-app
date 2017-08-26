import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { IonicStorageModule } from '@ionic/storage';


import { MyApp } from './app.component';
import { HomePage } from '../pages/Inicio/inicio';
import { AgendaPage } from '../pages/agenda/agenda';
import { RamasIEEE } from '../pages/ramas-ieee/ramas-ieee';
import { RamasDetalle } from '../pages/ramas-detalle/ramas-detalle';
import { CapitulosPage } from '../pages/capitulos/capitulos';
import { CapitulosDetallePage } from '../pages/capitulos-detalle/capitulos-detalle';
import { YoungprofessionalsPage } from '../pages/youngprofessionals/youngprofessionals';
import { QueesPage } from '../pages/quees/quees';
import { PremiosPage } from '../pages/premios/premios';
import { GymkhanaPage } from '../pages/gymkhana/gymkhana';
import { RankingPage } from '../pages/ranking/ranking';
import { Prueba1Page } from '../pages/prueba1/prueba1';
import { Prueba2Page } from '../pages/prueba2/prueba2';
import { Prueba3Page } from '../pages/prueba3/prueba3';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AgendaPage,
    RamasIEEE,
    RamasDetalle,
    CapitulosPage,
    CapitulosDetallePage,
    YoungprofessionalsPage,
    PremiosPage,
    QueesPage,
    GymkhanaPage,
    RankingPage,
    Prueba1Page,
    Prueba2Page,
    Prueba3Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AgendaPage,
    RamasIEEE,
    RamasDetalle,
    CapitulosPage,
    CapitulosDetallePage,
    YoungprofessionalsPage,
    PremiosPage,
    QueesPage,
    GymkhanaPage,
    RankingPage,
    Prueba1Page,
    Prueba2Page,
    Prueba3Page
  ],
  providers: [
    HTTP,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
