import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EventsService} from '../../../shared/services/events.service';

import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchTextChanged = new Subject<string>();
  subscription;

  constructor(private emitter: EventsService, public router: Router) {
  }

  ngOnInit() {
    this.subscription = this.searchTextChanged.pipe(
      debounceTime(3000)
    ).subscribe(res => {
      this.emitter.fireSearch(res);
    });
  }

  onSearch($event) {
    $event.target.value.trim().length > 0 ? this.searchTextChanged.next($event.target.value) : this.emitter.fireSearch('');
  }

  onLoggedout() {
    localStorage.removeItem('isLoggedin');
  }
}
