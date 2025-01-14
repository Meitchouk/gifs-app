import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page.component';
import { GifsListComponent } from './components/gifs-list/gifs-list.component';
import { GifsSearchBoxComponent } from './components/gifs-search-box/gifs-search-box.component';



@NgModule({
  declarations: [
    HomePageComponent,
    GifsListComponent,
    GifsSearchBoxComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HomePageComponent,
  ]
})
export class GifsModule { }
