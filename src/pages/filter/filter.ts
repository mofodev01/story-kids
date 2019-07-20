import { Component } from '@angular/core';
import { NavController, NavParams,Platform,LoadingController} from 'ionic-angular';

import { JsonDataProvider } from '../../providers/json-data/json-data';

import { DatabaseProvider } from '../../providers/database/database';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import { Toast } from '@ionic-native/toast';
import { AdMobFree, AdMobFreeInterstitialConfig/*,AdMobFreeBannerConfig*/ } from '@ionic-native/admob-free';


/*(ionChange)="loading()"*/

@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html'
})

export class FilterPage {
  
    seriesearch : string ;

      cat   : any; 
      cha: any; 

         countries: any;
       
         
         errorMessage: string;
       
         descending: boolean = false;
       order: number;
       column: string = 'tvname';
       /*----------------------------*/
       limit = 100;
   
        ///  private ListUser : any;  
       ListUser = [];
        /// private todo: FormGroup;
      
       

  constructor(public navCtrl: NavController, public navParams: NavParams
    , public JsonDataProvider: JsonDataProvider,private database: DatabaseProvider,
    public platform: Platform,private toast: Toast,private streamingMedia: StreamingMedia,
    private admobFree: AdMobFree, public loadingCtrl: LoadingController
    ) {


        this.getFliter();
   
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

 

 

         ngOnInit() {
               //this.getFliter();
              /// this.getListFliter()
            }

            getFliter() {

     
                this.JsonDataProvider.getFliter()
                         .subscribe(
                            countries =>{
                             this.countries = countries 
                               
                                       } ,
                           error => {
                             this.errorMessage = <any>error
                                
                                    });
              
               }

               /** ------------------------------------------------------------------------*/

               list_search($event) {

               /* let loading = this.loadingCtrl.create({
                  content: 'Please wait...'
                });*/
              
               /// loading.present();

                 this.JsonDataProvider.getCategorie($event)
                 .subscribe(
                  cat =>{
                   this.cat = cat 
                   ///loading.dismiss();
                             } ,
                 error => {
                   this.errorMessage = <any>error
                      ///  loading.dismiss();
                          });

                
               }
             
           /** ------------------------------------------------------------------------*/
           channel($event) {

            /* let loading = this.loadingCtrl.create({
               content: 'Please wait...'
             });*/
           
            /// loading.present();

              this.JsonDataProvider.getchannel($event)
              .subscribe(
                cha =>{
                this.cha = cha 
                ///loading.dismiss();
                          } ,
              error => {
                this.errorMessage = <any>error
                   ///  loading.dismiss();
                       });

             
            }
          
          
            /** ------------------------------------------------------------------------*/
              
          
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
