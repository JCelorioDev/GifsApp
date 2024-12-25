import { Component } from '@angular/core';
import { Gif} from '../../interfaces/gifs.interface';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  constructor(private gifsService:GifsService){

  }


  ngOnInit():void{

  }

  // Obtener la lista de gifs

  get getGifs(): Gif[]{
    return this.gifsService.gifList;
  }
}
