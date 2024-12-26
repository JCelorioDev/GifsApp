import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'gifs-shared-sidebar',
  standalone: false,

  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {


  ngOnInit():void{

  }

  constructor(private gifsService:GifsService){

  }

  getTags(){
    return this.gifsService.tagsHistory;
  }

  obtenerGifsporHistorial(name:string){
    this.gifsService.searchTag(name, true);
  }
}
