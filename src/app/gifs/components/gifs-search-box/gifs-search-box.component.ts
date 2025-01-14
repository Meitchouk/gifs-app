import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gifs-search-box',
  standalone: false,

  templateUrl: './gifs-search-box.component.html',
  styleUrl: './gifs-search-box.component.css'
})
export class GifsSearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef;

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    console.log({ newTag });
  }

}
