import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {LocalStorageService} from '../../../shared/services/localStorage.service';

@Component({
  selector: 'app-single-gif',
  templateUrl: './single-gif.component.html',
  styleUrls: ['./single-gif.component.scss']
})
export class SingleGifComponent implements OnInit {
  @Input() item: {};
  @Output() close = new EventEmitter<boolean>();
  favorites: [string];
  favoritedItem: boolean = false;

  ngOnInit() {
   this.favorites = this.localstorageService.getItems();
    this.isFavorite();
  }

  constructor(private localstorageService: LocalStorageService
  ) {}


  closeModal() {
    this.close.emit(false);
  }

  isFavorite() {
    this.favoritedItem = this.favorites.includes(this.item['id']);
  }

  addFavorite(id) {
    this.favorites.push(id);
    this.localstorageService.setItems(this.favorites);
    this.isFavorite();
  }

  removeFavorite(id) {
    this.favorites.splice(this.favorites.indexOf(id), 1);
    this.localstorageService.setItems(this.favorites);
    this.isFavorite();
  }
}
