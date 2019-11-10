import { Component } from '@angular/core';
import { NavController, NavParams,Platform,LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import {TextToSpeech} from '@ionic-native/text-to-speech';
import { AdMobFree, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';
@Component({
  selector: 'page-detail-story',
  templateUrl: 'detail-story.html',
})
export class DetailStoryPage {
  id:any;
  data: any;
  serie:string;
  errorMessage: string;
  
  
  

  constructor(public platform: Platform,private admobFree: AdMobFree , private tts: TextToSpeech, public http:  HttpClient,public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController ) {
    this.serie = "des";

  }
  play_Text_eng(texteng: string) {
    this.tts.speak({
      text: ''+texteng+'',
      rate: 0.75 ,
      locale: 'en-US'
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  play_Text_fr(/*textfr: string*/) {
    this.tts.speak({
     // text: ''+textfr+''
     text: ''
      ,locale: 'fr-FR'
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  stop(){
    this.tts.stop();
  }

  ionViewDidLoad() {

    this.id = this.navParams.get('id');
    
   
      console.log(this.id);
      
  }

  ionViewWillEnter(){
    this.get_detail_story();
             }

  get_detail_story() {

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();

    this.id = this.navParams.get('id');
 
   this.http.get('http://storykids.appmofix.com/api/detail-stories.php?id='+this.id+'')
   
    .subscribe(res => {
    
    
    this.data=res;
    loading.dismiss();
    
    console.log(this.data);
    },
    error => {
      this.errorMessage = <any>error
         loading.dismiss();
             });
  
}

launchInterstitial() {
  if (this.platform.is('android')) {
  const interstitialConfig: AdMobFreeInterstitialConfig = {
        //  isTesting: true,// Remove in production
          autoShow: true,
      //id: Your Ad Unit ID goes here
     id:'ca-app-pub-3000905870244951/9291447763'
  };

  this.admobFree.interstitial.config(interstitialConfig);

  
  this.admobFree.interstitial.prepare().then(() => {
      // success
      
  });

  }else if (this.platform.is('ios')) {
    const interstitialConfig: AdMobFreeInterstitialConfig = {
     // isTesting: true,// Remove in production
      autoShow: true,
  //id: Your Ad Unit ID goes here
 id:'ca-app-pub-3000905870244951/4885298890'
};

this.admobFree.interstitial.config(interstitialConfig);


this.admobFree.interstitial.prepare().then(() => {
  // success
  
});

  }
}



}
