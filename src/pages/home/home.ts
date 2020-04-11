import { Component } from '@angular/core';
import { NavController, NavParams,Platform,LoadingController} from 'ionic-angular';

import { KidsAgePage } from '../kids-age/kids-age';
import { LaunchReview } from '@ionic-native/launch-review';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  fairytales:any= "fairy tales"; 
  folktales:any = "folk tales";
  legends:any = "legends";
  historicalfiction:any = "historical fiction";
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public platform: Platform, public loadingCtrl: LoadingController,private launchReview: LaunchReview) {

      console.log(this.fairytales);
      console.log(this.folktales);
      console.log(this.legends);
      console.log(this.historicalfiction);
      this.rate();
  }
  rate(){
    if(this.launchReview.isRatingSupported()){
      this.launchReview.rating()
        .then(() => console.log('Successfully launched rating dialog'));
    }
  }
  push_fairytales(){
     
    this.navCtrl.push(KidsAgePage,{fairytales: this.fairytales});
  }

  push_folktales(){
    this.navCtrl.push(KidsAgePage,{folktales: this.folktales});
  }

  push_legends(){
    this.navCtrl.push(KidsAgePage,{legends: this.legends});
  }

  push_historicalfiction(){
    this.navCtrl.push(KidsAgePage,{historicalfiction: this.historicalfiction});
  }


}
