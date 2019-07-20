import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdMobFree, AdMobFreeInterstitialConfig/*,AdMobFreeBannerConfig*/ } from '@ionic-native/admob-free';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private admobFree: AdMobFree) {

  }
  launchInterstitial() {
   
    const interstitialConfig: AdMobFreeInterstitialConfig = {
       // isTesting: true,  //Remove in production
        autoShow: true,
        //id: Your Ad Unit ID goes here
        id:'ca-app-pub-3000905870244951/5491408793'
       
    };
  
    this.admobFree.interstitial.config(interstitialConfig);

    
    this.admobFree.interstitial.prepare().then(() => {
        // success
        
    });


  }
}
