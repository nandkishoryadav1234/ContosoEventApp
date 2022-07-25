import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import { Show } from './show';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ShhowService {
  private url = 'http://localhost:56617/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}
  getAllShows(): Observable<Show[]> {
    return this.httpClient.get<Show[]>(this.url + '/Shows');
    pipe(catchError(this.handleError));
  }
  addShow(sh: any, theatreId: number, screenId: number): Observable<any> {
    return this.httpClient
      .post<Show>(
        this.url +
          '/shows'+
          theatreId +
          screenId,
        JSON.stringify(sh),
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }
  getShowById(id: any): Observable<Show> {
    return this.httpClient
      .get<Show>(this.url + '/Shows' +id)
      .pipe(catchError(this.handleError));
  }

  updateShow(show: any): Observable<any> {
    console.log(show);
    return this.httpClient
      .put<Show>(
        this.url + '/Shows' +show.id,
        JSON.stringify(show),
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  handleError(eResponse: HttpErrorResponse) {
    if (eResponse.error instanceof ErrorEvent) {
      console.log('Client Side Error =' + eResponse.error.message);
      console.log('Status Code=' + eResponse.status);
    } else {
      console.log('Server Side Error =' + eResponse.error.message);
      console.log('Status Code=' + eResponse.status);
    }
    return throwError(eResponse.error.message);
  }
}
