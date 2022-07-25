import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ScreService {
  private url = 'http://localhost:56617/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}
  getAllScreens(): Observable<Screen[]> {
    return this.httpClient.get<Screen[]>(this.url + '/Screens');
    pipe(catchError(this.handleError));
  }

  addScreen(screen: any, theatreId: any): Observable<any> {
    return this.httpClient
      .post<Screen>(
        this.url + '/Screens/' +theatreId,
        JSON.stringify(screen),
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  updateScreen(screen: any): Observable<any> {
    console.log(screen);
    return this.httpClient
      .put<any>(
        this.url + '/Screens/' +screen.id,
        JSON.stringify(screen),
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  getScreenById(id: any): Observable<any> {
    return this.httpClient
      .get<any>(this.url + '/Screens/' + id)
      .pipe(catchError(this.handleError));
  }

  getTheatre(id: any): Observable<any> {
    return this.httpClient
      .get<any>(this.url + '/Screens')
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
