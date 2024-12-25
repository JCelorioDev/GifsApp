import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { SearchResponse } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-search-box',
  standalone: false,

  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  private value!:string;
  @ViewChild('value')
  private tagInput!:ElementRef<HTMLInputElement>;
  public listGifs:any;




  constructor(private gifsService:GifsService){

  }

  public searchGif():void {
    const newTag = this.tagInput.nativeElement.value
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }






}
