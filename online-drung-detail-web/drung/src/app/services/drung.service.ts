import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Drung } from '../models/drung';

@Injectable({
  providedIn: 'root'
})
export class DrungService {
  serverUrl = environment.baseUrl;
  //private headers = new Headers({'Content-Type': 'application/json'});
  // options: {
  //   headers?: HttpHeaders | {[header: string]: string | string[]},
  //   observe?: 'body',
  //   params?: HttpParams|{[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>},
  //   reportProgress?: boolean,
  //   // responseType?: 'arraybuffer'|'blob'|'json'|'text',
  //   responseType?: 'json',
  //   withCredentials?: boolean,
  // }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(
     private http:HttpClient
      ) { }

  getDrungs() {
    return this.http.get<Drung>(this.serverUrl + 'drungs/drung-all').pipe(
      catchError(this.handleError)
    );
  }

  getDrungById(drungId: number){
    return this.http.get<Drung>(this.serverUrl + 'drungs/drung-by-id/' + drungId).pipe(
      catchError(this.handleError)
    );
  }

  getDrungByDrungType(typeName: String){
    return this.http.get<Drung>(this.serverUrl + 'drungs/drung-by-typeName/' + typeName).pipe(
      catchError(this.handleError)
    );
  }

  getDrungByDrungName(drungName: String){
    return this.http.get<Drung>(this.serverUrl + 'drungs/drung-by-drungName/' + drungName).pipe(
      catchError(this.handleError)
    );
  }

  addDrung(dataDrung){
    return this.http.post(this.serverUrl+'drungs',dataDrung,this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  updateDrung(dataDrung){
    return this.http.put(this.serverUrl+'drungs',dataDrung,this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  deleteDrungById(drungId: number){
    return this.http.delete(this.serverUrl + 'drungs/drung-by-id/'+drungId).pipe(
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.

      console.error('An error occurred:', error.error.message);
    } else {

      // The backend returned an unsuccessful response code.

      // The response body may contain clues as to what went wrong.

      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    // return an observable with a user-facing error message

    return throwError('Something bad happened. Please try again later.');
  }
}
