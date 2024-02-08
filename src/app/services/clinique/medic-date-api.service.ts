import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMedicDate } from 'src/app/interfaces/IMedicDate';

@Injectable({
  providedIn: 'root',
})
export class MedicDateAPIService {
  private url_api = 'http://localhost:5170/api/MedicDate';

  constructor(private http: HttpClient) {}

  getRequest(): Observable<IMedicDate[]> {
    return this.http.get<IMedicDate[]>(this.url_api);
  }
}
