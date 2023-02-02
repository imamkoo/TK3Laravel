import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  listUser() {
    return this.http.get<any>(`${this.baseUrl}/pembeli`);
  }

  find(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/pembeli/${id}`);
  }

  update(id: number, barang: any): Observable<any> {
    return this.http.put(
      `${this.baseUrl}/pembeli/${id}`,
      barang,
      this.httpOptions
    );
  }

  deletePembeli(id: any): Observable<any> {
    return this.http.delete<any>(
      `${this.baseUrl}/pembeli/${id}`,
      this.httpOptions
    );
  }
}
