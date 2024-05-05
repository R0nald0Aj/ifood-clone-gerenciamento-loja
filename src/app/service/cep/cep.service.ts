import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Address } from '../../model/address';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CepService {
   url = '';
   finalSBaseUrl ="/json/"
  constructor(private httpClient: HttpClient) {
     this.url  =  `${environment.url_cep}`
   }

   findAdderss(zipCode:string) : Observable<Address>{
     
   return  this.httpClient.get<Address>(`${this.url}/${zipCode}/${this.finalSBaseUrl}`)
    .pipe(
      catchError(this.handleError)
    )      
     
   }


   private handleError(error: HttpErrorResponse) {
    console.log(error)
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
