import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { DetailStoryPage } from '../detail-story/detail-story'
@Component({
  selector: 'page-story',
  templateUrl: 'story.html',
})
export class StoryPage {
  age:any;
  type:any;
  data: any;
  constructor( public http:  HttpClient,public navCtrl: NavController, public navParams: NavParams) {
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

    this.age = this.navParams.get('age');
    this.type = this.navParams.get('type');
    
   
   //this.http.get('http://space.iptvmedia.me/api/liste_free_server.php?username='+this.data_storage,options)
   this.http.get('http://story-kads.iptvmedia.me/api/stories.php?genre='+this.type+'&&age='+this.age+'')
   
    .subscribe(res => {
    
    
    this.data=res;
    
    console.log(this.data);
    });
  
}

push_data_story(id: Number){

  this.navCtrl.push(DetailStoryPage,{id: id});
}

}
