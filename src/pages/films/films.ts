import { Component } from '@angular/core';
import { NavController, NavParams,Platform,LoadingController} from 'ionic-angular';

import { JsonDataProvider } from '../../providers/json-data/json-data';

import { DatabaseProvider } from '../../providers/database/database';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import { Toast } from '@ionic-native/toast';
import { AdMobFree, AdMobFreeInterstitialConfig/*,AdMobFreeBannerConfig*/ } from '@ionic-native/admob-free';









@Component({
  selector: 'page-films',
  templateUrl: 'films.html'
})

export class FilmsPage {


  
      


         countries: any;
         
         errorMessage: string;
       
         descending: boolean = false;
       order: number;
       column: string = 'tvname';
       /*----------------------------*/
       limit = 100;
         ListUser = [];
       
      
       

         constructor(public navCtrl: NavController, public navParams: NavParams
          , public JsonDataProvider: JsonDataProvider,private database: DatabaseProvider,
          public platform: Platform,private toast: Toast,private streamingMedia: StreamingMedia,
          private admobFree: AdMobFree, public loadingCtrl: LoadingController) {
      
      
            ///this.getLive();
         
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
          
           
          
           
          
                /*
                      ionViewDidLoad() {
                        this.getLive();
                        }
          */
                     ngOnInit() {
                         this.getLive();
                      }
          
                        getLive() {
          
               
                          let loading = this.loadingCtrl.create({
                            content: 'Please wait...'
                          });
                        
                          loading.present();
                  
                          this.JsonDataProvider.getLive()
                                   .subscribe(
                                     countries =>{
                                       this.countries = countries 
                                           loading.dismiss();
                                                 } ,
                                     error => {
                                       this.errorMessage = <any>error
                                          loading.dismiss();
                                              });
                        
                         }
          
                         doInfinite(infiniteScrollEvent) {
                          this.limit += 20;
                          infiniteScrollEvent.complete();
                          infiniteScrollEvent.disabled = true;
                        }
                    
                     
                    
                    
                    
                        
                    
                      sort(){
                        this.descending = !this.descending;
                        this.order = this.descending ? 1 : -1;
                      }
          
                                 
                                 CreateUser(
                                   id: Number,
                                    title: String,
                                    Url : String,
                                    logo: String,
                                    name: String,
                                    group: String){
                                  
                               
                                  this.database.Createfavorate( id, title, Url, name,logo,group )
                                  .then( (data) => {
                                    console.log(data);
                                   
                                  }, (error) => {
                                    console.log(error);
                                  })
          
          
                                  this.toast.show('ajouté avec succès', '5000', 'center').subscribe(
                                    toast => {
                                      console.log(toast);
                                    }
                                  );
          
          
                                }
                                
                                GetAllUser(){
                                  this.database.GetAllfavorates().then((data: any) => {
                                    console.log(data);
                                    this.ListUser = data;
                                  }, (error) => {
                                    console.log(error);
                                  })
                                }
                                
                                DeleteUser(idfavorate){
                                  console.log(idfavorate);
                                
                                }
          
                                doRefresh(refresher) {
                    
                
                                  setTimeout(() => {
                                  refresher.complete();
                                 }, 2000);
                             }
                                
          
                             launchInterstitial() {
             
                              const interstitialConfig: AdMobFreeInterstitialConfig = {
                                 // isTesting: true,  //Remove in production
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