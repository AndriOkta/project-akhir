import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Division } from '../model/division.model';
import { TambahdataComponent } from '../tambahdata/tambahdata.component';

const baseUrl = 'https://spa-api.aqiladigital.com/api/divisions'
@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Division[]>{
    return this.http.get<Division[]>(baseUrl);
  }
}