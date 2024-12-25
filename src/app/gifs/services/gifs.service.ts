import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {


  apiKey = 'kztaVREfGcBo4WRScdfiKy0VLafbPD0G';
  api_url = 'https://api.giphy.com/v1/gifs/';

  public gifList: Gif[] = [];

  private _tagsHistory: string[] = [];


  constructor(private httpClient:HttpClient) {

  }

  get tagsHistory() {
    const tags = localStorage.getItem('tags');
    if (tags) {
      return JSON.parse(tags); // Seguro porque ya verificamos que no es null
    }
    return [];
  }

   searchTag(tag:string){
    if (tag.length == 0) return;

    this.organizeHistory(tag);
    const params = new HttpParams().set('api_key', this.apiKey).set('limit', '8').set('q', tag)

    this.httpClient.get<SearchResponse>(`${this.api_url}search`, {params}).subscribe(resp => {
      this.gifList = resp.data;
      console.log(this.gifList);
    })
  }


  private organizeHistory(tag:string):void{
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.slice(0,10);

    localStorage.setItem('tags', JSON.stringify(this._tagsHistory));
  }
}
