import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GifsServiceService {

  private _tagsHistory: string[] = [];

  constructor() { }

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  searchTag(tag: string) {
    this._tagsHistory.unshift(tag);
    console.log({ tag });
  }

}
