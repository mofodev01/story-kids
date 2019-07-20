import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/////import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

/*
  Generated class for the JsonDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JsonDataProvider {

  constructor(public http:  HttpClient) {
    console.log('Hello JsonDataProvider Provider');
  }

 /*-------------------------------api-live----------------------------------*/
  apiUrl_live = 'http://live.iptvmedia.me/live.php';
 
 getLive(): Observable<{}> {
  return this.http.get(this.apiUrl_live).pipe(
    map(this.extractData),
    catchError(this.handleError)
  );
}

private extractData(res: Response) {
  let body = res;
  return body || { };
}

private handleError (error: Response | any) {
  let errMsg: string;
  if (error instanceof Response) {
    const err = error || '';
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } else {
    errMsg = error.message ? error.message : error.toString();
  }
  console.error(errMsg);
  return Observable.throw(errMsg);
}
/*-----------------------------------------------------------------*/

/*-------------------------------api-Anime----------------------------------*/
apiUrl_Anime = 'http://api-web.000webhostapp.com/live_json.php';///<=<=<=<=<== Anime_json.php
 
getAnime(): Observable<{}> {
 return this.http.get(this.apiUrl_Anime).pipe(
   map(this.extractDataAnime),
   catchError(this.handleErrorAnime)
 );
}

private extractDataAnime(res: Response) {
 let body = res;
 return body || { };
}

private handleErrorAnime (error: Response | any) {
 let errMsg: string;
 if (error instanceof Response) {
   const err = error || '';
   errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
 } else {
   errMsg = error.message ? error.message : error.toString();
 }
 console.error(errMsg);
 return Observable.throw(errMsg);
}
/*-----------------------------------------------------------------*/

/*-------------------------------api-Film----------------------------------*/
apiUrl_Film = 'http://live.iptvmedia.me/live.php';
 
getFilm(): Observable<{}> {
 return this.http.get(this.apiUrl_Film).pipe(
   map(this.extractDataFilm),
   catchError(this.handleErrorFilm)
 );
}

private extractDataFilm(res: Response) {
 let body = res;
 return body || { };
}

private handleErrorFilm (error: Response | any) {
 let errMsg: string;
 if (error instanceof Response) {
   const err = error || '';
   errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
 } else {
   errMsg = error.message ? error.message : error.toString();
 }
 console.error(errMsg);
 return Observable.throw(errMsg);
}
/*-----------------------------------------------------------------*/

/*-------------------------------api-Serie----------------------------------*/
apiUrl_Serie = 'http://live.iptvmedia.me/live.php';
 
getSerie(): Observable<{}> {
 return this.http.get(this.apiUrl_Serie).pipe(
   map(this.extractDataSerie),
   catchError(this.handleErrorSerie)
 );
}

private extractDataSerie(res: Response) {
 let body = res;
 return body || { };
}

private handleErrorSerie (error: Response | any) {
 let errMsg: string;
 if (error instanceof Response) {
   const err = error || '';
   errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
 } else {
   errMsg = error.message ? error.message : error.toString();
 }
 console.error(errMsg);
 return Observable.throw(errMsg);
}
/*-----------------------------------------------------------------*/
/*-------------------------------combobox filter----------------------------------*/
apiUrl_filter = 'http://live.iptvmedia.me/search.json';
 
getFliter(): Observable<{}> {
 return this.http.get(this.apiUrl_filter).pipe(
   map(this.extractDataFilter),
   catchError(this.handleErrorFliter)
 );
}

private extractDataFilter(res: Response) {
 let body = res;
 return body || { };
}

private handleErrorFliter (error: Response | any) {
 let errMsg: string;
 if (error instanceof Response) {
   const err = error || '';
   errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
 } else {
   errMsg = error.message ? error.message : error.toString();
 }
 console.error(errMsg);
 return Observable.throw(errMsg);
}
/*-----------------------------------------------------------------*/
/*-------------------------------filter categorie----------------------------------*/
apiUrl_filter_categorie = 'http://live.iptvmedia.me/search.php';
 
getCategorie(cat : String): Observable<{}> {
 return this.http.get(this.apiUrl_filter_categorie+"?country="+cat).pipe(
   map(this.extractDatafilter_categorie),
   catchError(this.handleErrorfilter_categorie)
 );
}

private extractDatafilter_categorie(res: Response) {
 let body = res;
 return body || { };
}

private handleErrorfilter_categorie (error: Response | any) {
 let errMsg: string;
 if (error instanceof Response) {
   const err = error || '';
   errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
 } else {
   errMsg = error.message ? error.message : error.toString();
 }
 console.error(errMsg);
 return Observable.throw(errMsg);
}
/*-----------------------------------------------------------------*/
/*-------------------------------filter channel----------------------------------*/
apiUrl_filter_channel = 'http://live.iptvmedia.me/search_channel.php';
 
getchannel(channel : String): Observable<{}> {
 return this.http.get(this.apiUrl_filter_channel+"?channel="+channel).pipe(
   map(this.extractDatafilter_channel),
   catchError(this.handleErrorfilter_channel)
 );
}

private extractDatafilter_channel(res: Response) {
 let body = res;
 return body || { };
}

private handleErrorfilter_channel (error: Response | any) {
 let errMsg: string;
 if (error instanceof Response) {
   const err = error || '';
   errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
 } else {
   errMsg = error.message ? error.message : error.toString();
 }
 console.error(errMsg);
 return Observable.throw(errMsg);
}
/*-----------------------------------------------------------------*/
  


}
