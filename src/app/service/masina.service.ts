import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {MasinaDTO} from "../models/api/MasinaDTO";

@Injectable({
  providedIn: 'root'
})
export class MasinaService {

  private url  = "http://localhost:8080";
  constructor(private http:HttpClient) { }

  getMasina():Observable<MasinaDTO[]>{
    return this.http.get<MasinaDTO[]>(this.url).pipe(catchError(this.handleError));
  }

  addCar(masinaDTO : MasinaDTO):Observable<String>{
    return this.http.post<String>(this.url +"/api/v1/add",masinaDTO).pipe(catchError(this.handleError))

  }
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(()=>'Something bad happened; please try again later.');
  };
}
