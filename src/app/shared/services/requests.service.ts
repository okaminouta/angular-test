import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { catchError, tap } from 'rxjs/operators';
import { prepareResponseErrorMessage } from '../../shared/helpers/error';
import {HttpHeaders} from '@angular/common/http/src/headers';
import {HttpParams} from '@angular/common/http/src/params';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  loading = new BehaviorSubject<boolean>(false);
  decisionMakersLoading = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  getTrending(page) {
    this.loading.next(true);
    return this.http.get(`${environment.apiUrl}trending`,  {
      params: {api_key: environment.apiKey, offset: `${page * 25}`}
    })
      .pipe(
        tap(() => this.loading.next(false)),
        catchError(this.handleError)
      );
  }
  search(query, page) {
    this.loading.next(true);
    return this.http.get(`${environment.apiUrl}search`,  {
      params: {api_key: environment.apiKey, offset: `${page * 25}`, q: query}
    })
      .pipe(
        tap(() => this.loading.next(false)),
        catchError(this.handleError)
      );
  }
  handleError = (error: HttpErrorResponse) => {
    this.loading.next(false);
    this.decisionMakersLoading.next(false);
    return throwError(prepareResponseErrorMessage(error));
  }
}
