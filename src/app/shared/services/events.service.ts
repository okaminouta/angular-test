import { Injectable, EventEmitter  } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {


  constructor() {}
  searching = new EventEmitter<string>();

  fireSearch(query) {
    this.searching.emit(query);
  }
}
