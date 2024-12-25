import { Component, Input } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif, SearchResponse } from '../../interfaces/gifs.interface';


@Component({
  selector: 'gifs-card-list',
  standalone: false,

  templateUrl: './cardlist.component.html',
  styleUrl: './cardList.component.css'
})
export class CardListComponent {

  @Input() gifs!: Gif[];

  constructor(private gifsSeervice:GifsService){

  }



  ngOnInit():void{
  }



}
