import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController } from 'ionic-angular';

import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import { JsonDataProvider } from '../../providers/json-data/json-data';


import { DatabaseProvider } from '../../providers/database/database';
import { AdMobFree, AdMobFreeInterstitialConfig} from '@ionic-native/admob-free';





@Component({
  selector: 'page-favorate',
  templateUrl: 'favorate.html',
 
})
export class FavoratePage {


 /*
  Url : String;
    id: Number;
      title: String;
      logo: String;
      name: String;
      group: String;
*/

      
    
      ListUser: any[] = [];
       

  constructor(public navCtrl: NavController, public navParams: NavParams,private streamingMedia: StreamingMedia
    , public JsonDataProvider: JsonDataProvider,
    private database: DatabaseProvider, private admobFree: AdMobFree, public loadingCtrl: LoadingController) {}
   

  ngOnInit() {
    this.GetAllUser();
 }






  startVideo(url) {
            
        let options: StreamingVideoOptions = {
          successCallback: () => { console.log('Finished Video') },
          errorCallback: (e) => { console.log('Error: ', e) },
          orientation: 'portrait'
        };
     
        // http://www.sample-videos.com
        this.streamingMedia.playVideo(''+url+'', options);
      
     

 }


GetAllUser(){

 ///-------------------------------
 let loading = this.loadingCtrl.create({
  content: 'Please wait...'
});

loading.present();
 ///-------------------------------

  this.database.GetAllfavorates().then((data: any) => {
    console.log(data);
    this.ListUser = data;
    loading.dismiss();
  }, (error) => {
    console.log(error);
    loading.dismiss();
  })

}


Deletefavorate(id : any, index){
  this.database.Deletefavorate(id)
  .then(response => {
    console.log( response );
    this.ListUser.splice(index, 1);
  })
  .catch( error => {
    console.error( error );
  })
}



launchInterstitial() {
   
  const interstitialConfig: AdMobFreeInterstitialConfig = {
    // isTesting: true,  // Remove in production
      autoShow: true,
      //id: Your Ad Unit ID goes here
     id:'ca-app-pub-3000905870244951/6159900939'
  };

  this.admobFree.interstitial.config(interstitialConfig);

  
  this.admobFree.interstitial.prepare().then(() => {
      // success
      
  });

}


}
