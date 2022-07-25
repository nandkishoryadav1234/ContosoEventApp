import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root',
})
export class CustmerService {
  private url = 'http://localhost:56617/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getAllCustomer(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.url + '/Customers');
    pipe(catchError(this.handleError));
  }

  deleteCustomer(customerId: number): Observable<Customer> {
    return this.httpClient
      .delete<Customer>(this.url + '/Customers/' + customerId)
      .pipe(catchError(this.handleError));
  }

  addCustomer(cust: any): Observable<any> {
    return this.httpClient
      .post<Customer>(
        this.url + '/Customers/',
        JSON.stringify(cust),
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  updateCustomer(cust: any): Observable<any> {
    console.log(cust);
    return this.httpClient
      .put<Customer>(
        this.url + '/Customers/'+ cust.id,
        JSON.stringify(cust),
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  getCustomerById(id: any): Observable<Customer> {
    return this.httpClient
      .get<Customer>(this.url + '/Customers/' + id)
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
