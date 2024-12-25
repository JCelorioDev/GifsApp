import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from "../shared/shared.module";
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/cardList/cardList.component';



@NgModule({
  declarations: [
    HomeComponent,
    SearchBoxComponent,
    CardListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
],
  exports: [
    HomeComponent
  ]
})
export class GifsModule { }
