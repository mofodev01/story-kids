import { Component, ViewChild } from '@angular/core';
import { Nav, Platform ,ActionSheetController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


///import { HomePage } from '../pages/home/home';
import { LivePage } from '../pages/live/live';
///import { AnimePage } from '../pages/anime/anime';
import { FavoratePage } from '../pages/favorate/favorate';
import { FilmsPage } from '../pages/films/films';
import { SeriesPage } from '../pages/series/series';
import { FilterPage } from '../pages/filter/filter';

import { Market } from '@ionic-native/market';
import { SocialSharing } from '@ionic-native/social-sharing';

import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';





@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //rootPage: any = HomePage;
  rootPage: any = LivePage;

  pages: Array<{title: string , icon: string , component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, 
    public splashScreen: SplashScreen,private market: Market,
    private socialSharing: SocialSharing,
    public actionsheetCtrl: ActionSheetController,
    private admobFree: AdMobFree) {
    this.initializeApp();
    this.showBanner();
    // used for an example of ngFor and navigation   SeriesPage
    this.pages = [
     /* { title: 'Home', component: HomePage,icon : "md-home" },*/
      { title: 'Live', component: LivePage,icon : "md-desktop" },
      ////{ title: 'Anime', component: AnimePage,icon : "md-body" },
      { title: 'Films', component: FilmsPage,icon : "md-videocam" },
      { title: 'Series', component: SeriesPage,icon : "ios-film-outline" }
      ,
      { title: 'Favorate', component: FavoratePage,icon : "md-bookmarks" }
      ,
      { title: 'Filter', component: FilterPage,icon : "search" }
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

  rateApp(){
    this.market.open('com.franceflix.streaming');
    }

    shareApp() {
      /*  this.appodeal.hide(this.appodeal.AD_TYPES.BANNER);*/
        let actionSheet = this.actionsheetCtrl.create({
          title: 'Partager',
          cssClass: 'action-sheets-basic-page',
          buttons: [
            {
              text: 'Facebook',
              role: 'destructive',
              icon: 'logo-facebook',
             // cssClass: 'action-red',
              handler: () => {
               
                  this.socialSharing.shareViaFacebook("", "", "https://play.google.com/store/apps/details?id=com.franceflix.streaming").then(() => {
                    console.log("shareViaFacebook: Success");
                  }).catch(() => {
                    console.error("shareViaFacebook: failed");
                  });
               
              }
            },
         
          
            {
              text: 'Whatsapp',
              role: 'destructive',
              icon: 'logo-whatsapp',
           
              handler: () => {
                this.socialSharing.shareViaWhatsApp("", "https://image.prntscr.com/image/40007xNYQNKMcy68bEChwQ.png" ,"https://play.google.com/store/apps/details?id=com.franceflix.streaming").then(() => {
                  console.log("shareViaWhatsApp: Success");
                }).catch(() => {
                  console.error("shareViaWhatsApp: failed");
                });
              }
            },
            {
              text: 'Twitter',
              role: 'destructive',
              icon: 'logo-twitter',
           
              handler: () => {
                this.socialSharing.shareViaTwitter("", "https://image.prntscr.com/image/40007xNYQNKMcy68bEChwQ.png" ,"https://play.google.com/store/apps/details?id=com.franceflix.streaming").then(() => {
                  console.log("shareViatwitter: Success");
                }).catch(() => {
                  console.error("shareViatwitter: failed");
                });
              }
            },
            {
              text: 'Autre',
              role: 'destructive',
              icon: 'paper-plane',
            
              handler: () => {
                this.socialSharing.share("","", "https://image.prntscr.com/image/40007xNYQNKMcy68bEChwQ.png" ,"https://play.google.com/store/apps/details?id=com.franceflix.streaming").then(() => {
                  console.log("shareViatwitter: Success");
                }).catch(() => {
                  console.error("shareViatwitter: failed");
                });
              }
            },
            {
              text: 'annuler',
              role: 'cancel', // will always sort to be on the bottom
              icon: 'close' ,
              handler: () => {
                console.log('Cancel clicked');
              }
            }
          ]
        });
        actionSheet.present();
      }

      showBanner(){

        const bannerConfig: AdMobFreeBannerConfig = {
          // add your config here
          // for the sake of this example we will just use the test config
         // isTesting: true,// Remove in production
          autoShow: true,
          id:'ca-app-pub-3000905870244951/2118429550'


         };
         this.admobFree.banner.config(bannerConfig);
         
         this.admobFree.banner.prepare()
           .then(() => {
             // banner Ad is ready
             // if we set autoShow to false, then we will need to call the show method here
           })
           .catch(e => console.log(e));
      
      }


      ///source push notification :  https://www.youtube.com/watch?v=xxhcKe1C4-I

     

      

}
