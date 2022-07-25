import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import { Theatre } from './theatre';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ThetreService {
  private url = 'http://localhost:56617/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}

  getAllTheatres(): Observable<Theatre[]> {
    return this.httpClient.get<Theatre[]>(this.url + '/theatres');
    pipe(catchError(this.handleError));
  }

  deleteTheatre(TheatreId: number): Observable<Theatre> {
    return this.httpClient
      .delete<Theatre>(this.url + '/theatres/' + TheatreId)
      .pipe(catchError(this.handleError));
  }

  addTheatre(theatre: any): Observable<any> {
    return this.httpClient
      .post<Theatre>(
        this.url + '/theatres',
        JSON.stringify(theatre),
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  updateTheatre(theatre: any): Observable<any> {
    console.log(theatre);
    return this.httpClient
      .put<Theatre>(
        this.url + '/theatres/' +theatre.Id,
        JSON.stringify(theatre),
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  findTheatre(id: any): Observable<Theatre> {
    return this.httpClient
      .get<Theatre>(this.url + '/theatres' + id)
      .pipe(catchError(this.handleError));
  }

  findTheatresbyMovie(movieId: any): Observable<Theatre[]> {

    return this.httpClient
      .get<Theatre[]>(this.url + '/theatres/' + movieId)
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
