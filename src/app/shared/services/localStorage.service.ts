import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {


  constructor() {}

  getItems() {
    const items = JSON.parse(localStorage.getItem('favoriteGifs'));
    if (items == null)this.setItems([]);
    return items || [];
  }

  setItems(arr) {
    localStorage.setItem('favoriteGifs', JSON.stringify(arr));
  }
}
