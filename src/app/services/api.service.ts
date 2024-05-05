import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Dvd } from '../models/dvd.interface';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  GetDvd(id: number): Observable<Dvd> {
    return this.http.get<Dvd>(`${this.baseUrl}/dvd/GetDvd?id=${id}`);
  }
  GetAllDvd(): Observable<Dvd[]> {
    return this.http.get<Dvd[]>(`${this.baseUrl}/dvd/GetDvd`).pipe(
      map((response: Dvd[]) => {
        return response;
      })
    );
  }
  CreateDvd(data: Dvd): Observable<void> {
    console.log(data)
    return this.http.post<void>(`${this.baseUrl}/dvd/CreateDvd`, data);
  }
  DeleteDvd(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/dvd/DeleteDvd?id=${id}`);
  }
  UpdateDvd(data: Dvd): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/dvd/UpdateDvd`, data);
  }
}