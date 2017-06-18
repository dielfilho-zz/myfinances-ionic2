import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { StorageExpenseService } from '../services/expense.service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewSpent } from '../pages/new-spent/new-spent';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewSpent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewSpent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    StorageExpenseService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
