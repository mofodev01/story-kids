import { Component } from '@angular/core';
import { NavController, NavParams,Platform,LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { DetailStoryPage } from '../detail-story/detail-story'
import { AdMobFree, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';
@Component({
  selector: 'page-story',
  templateUrl: 'story.html',
})
export class StoryPage {
  age:any;
  type:any;
  data: any;
   errorMessage: string;
  constructor(public platform: Platform, public http:  HttpClient,public navCtrl: NavController, public navParams: NavParams,
    private admobFree: AdMobFree, public loadingCtrl: LoadingController ) {
    this.age = this.navParams.get('age');
    this.type = this.navParams.get('type');
  }

  ionViewDidLoad() {

    this.age = this.navParams.get('age');
    this.type = this.navParams.get('type');
   
      console.log(this.age);
      console.log(this.type);
  }

  ionViewWillEnter(){
    this.getstory();
             }

  getstory() {

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();

    this.age = this.navParams.get('age');
    this.type = this.navParams.get('type');
    
   
   //this.http.get('http://space.iptvmedia.me/api/liste_free_server.php?username='+this.data_storage,options)
   this.http.get('http://storykids.appmofix.com/api/stories.php?genre='+this.type+'&&age='+this.age+'')
   
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

push_data_story(id: Number){
  this.launchInterstitial();
  this.navCtrl.push(DetailStoryPage,{id: id});
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
