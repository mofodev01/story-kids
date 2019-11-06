import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
////import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//import { LivePage } from '../pages/live/live';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { JsonDataProvider } from '../providers/json-data/json-data';



import { HttpClientModule } from '@angular/common/http';


import { SocialSharing } from '@ionic-native/social-sharing';
import { Market } from '@ionic-native/market';
import { AdMobFree } from '@ionic-native/admob-free';

import { KidsAgePage } from '../pages/kids-age/kids-age';
import { StoryPage } from '../pages/story/story'
import { DetailStoryPage } from '../pages/detail-story/detail-story'



import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Network } from '@ionic-native/network';


/**/
@NgModule({
  declarations: [
    MyApp,
    HomePage,
   
  KidsAgePage,
  StoryPage,
  DetailStoryPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  
    ///BrowserAnimationsModule,
   /* IonicStorageModule.forRoot(),*/
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
   /// LivePage,
   
    KidsAgePage,
    StoryPage,
    DetailStoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,

    SocialSharing,
    Market,
    
   /**/ 
    HttpClientModule,
    /*IonicStorageModule,
   */
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JsonDataProvider,
    
    AdMobFree,
    Network,
    TextToSpeech
   
  ]
})
export class AppModule {}
