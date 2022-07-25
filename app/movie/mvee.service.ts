import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import { Movie } from './movie';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class MveeService {
  private url = 'http://localhost:5000/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getAllMovies(): Observable<Movie[]> {
    return this.httpClient
      .get<Movie[]>(this.url + '/Movies')
      .pipe(catchError(this.handleError));
  }

  deleteMovie(movieId: number): Observable<Movie> {
    return this.httpClient
      .delete<Movie>(this.url + '/Movies/' + movieId)
      .pipe(catchError(this.handleError));
  }

  addMovie(mvee: any): Observable<any> {
    return this.httpClient
      .post<Movie>(
        this.url + '/Movies',
        JSON.stringify(mvee),
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  updateMovie(mvee: any): Observable<any> {
    console.log(mvee);
    return this.httpClient
      .put<Movie>(
        this.url + '/Movies/'+ mvee.id,
        JSON.stringify(mvee),
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  addMovieToShow(mvee: any, showId: number): Observable<any> {
    console.log(mvee);
    return this.httpClient
      .put<Movie>(
        this.url + '/Movies/'+ showId,
        JSON.stringify(mvee),
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  getMovieById(id: any): Observable<Movie> {
    return this.httpClient
      .get<Movie>(this.url + '/Movies/' + id)
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
