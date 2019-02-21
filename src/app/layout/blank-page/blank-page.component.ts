import {Component, OnInit} from '@angular/core';
import {RequestsService} from '../../shared/services/requests.service';
import {EventsService} from '../../shared/services/events.service';

@Component({
  selector: 'app-blank-page',
  templateUrl: './blank-page.component.html',
  styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit {
  constructor(private requestsService: RequestsService,
              private eventsService: EventsService,
  ) {
  }

  loading = false;
  trendingGifs = [];
  isOpen = false;
  selectedImg: {};
  page = 0;
  searchString: string;

  ngOnInit() {
    this.requestsService.loading.subscribe(value => this.loading = value);
    this.loadTrending();
    this.eventsService.searching.subscribe(
      (query: string) => {
        this.trendingGifs = [];
        this.page = 0;
        this.searchString = query;
        this.loadMore();
      });
  }

  openModal(item) {
    this.selectedImg = item;
    this.toggleModal(true);
  }

  toggleModal(value: boolean) {
    this.isOpen = value;
  }

  onScroll() {
    this.page++;
    this.loadMore();
  }

  loadTrending() {
    this.requestsService.getTrending(this.page).subscribe(
      (res) => {
        if (res && res['data']) this.trendingGifs = [...this.trendingGifs, ...res['data']];
      },
      error => console.log(error));
  }

  loadSearch() {
    this.requestsService.search(this.searchString, this.page).subscribe(
      (res) => {
        if (res && res['data']) this.trendingGifs = [...this.trendingGifs, ...res['data']];
      },
      error => console.log(error));
  }

  loadMore() {
    this.searchString.trim().length > 0 ? this.loadSearch() : this.loadTrending();
  }

}
