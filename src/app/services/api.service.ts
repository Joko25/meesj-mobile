import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import { Student } from '../models/student'; 
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // API path
  quran_path = 'https://api.banghasan.com/';

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  listSurat():Observable<any>{
    return this.http
      .get<any>(this.quran_path +'quran/format/json/surat')
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getSuratData(nomor, total):Observable<any>{
    return this.http
      .get<any>(this.quran_path +`quran/format/json/surat/${nomor}/ayat/1-${total}`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


}
