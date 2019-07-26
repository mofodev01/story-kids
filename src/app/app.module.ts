import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
////import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyApp } from './app.component';
///import { HomePage } from '../pages/home/home';
import { LivePage } from '../pages/live/live';
////import { AnimePage } from '../pages/anime/anime';
import { FavoratePage } from '../pages/favorate/favorate';
import { FilmsPage } from '../pages/films/films';
import { SeriesPage } from '../pages/series/series';
import { FilterPage } from '../pages/filter/filter';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StreamingMedia } from '@ionic-native/streaming-media';
import { JsonDataProvider } from '../providers/json-data/json-data';
import { SearchPipe } from '../pipes/search/search';
import { SortPipe } from '../pipes/sort/sort';
import { Toast } from '@ionic-native/toast';

import { HttpClientModule } from '@angular/common/http';
import { DatabaseProvider } from '../providers/database/database';
///import { IonicStorageModule } from '@ionic/storage';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { SQLite } from '@ionic-native/sqlite';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Market } from '@ionic-native/market';
import { AdMobFree } from '@ionic-native/admob-free';

import { KidsAgePage } from '../pages/kids-age/kids-age';
import { StoryPage } from '../pages/story/story'
import { DetailStoryPage } from '../pages/detail-story/detail-story'
////https://ionicacademy.com/ionic-searchable-select-component/
import { SelectSearchableModule } from 'ionic-select-searchable';

import { TextToSpeech } from '@ionic-native/text-to-speech';



/**/
@NgModule({
  declarations: [
    MyApp,
    ///HomePage,
    LivePage,
    SearchPipe,
  SortPipe,
 /// AnimePage,
  FilmsPage,
  SeriesPage,
  FavoratePage,
  FilterPage,
  KidsAgePage,
  StoryPage,
  DetailStoryPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  
    ///BrowserAnimationsModule,
   /* IonicStorageModule.forRoot(),*/
    IonicModule.forRoot(MyApp),
    SelectSearchableModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ///HomePage,
    LivePage,
    ///AnimePage,
    FilmsPage,
    SeriesPage,
    FavoratePage,
    FilterPage,
    KidsAgePage,
    StoryPage,
    DetailStoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    StreamingMedia,
    
    SQLitePorter,
    SQLite,
    Toast,
    SocialSharing,
    Market,
   
   /**/ 
    HttpClientModule,
    /*IonicStorageModule,
   */
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JsonDataProvider,
    DatabaseProvider,
    AdMobFree,
    TextToSpeech
   
  ]
})
export class AppModule {}
