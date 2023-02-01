import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  listBarang() {
    return this.http.get<any>(`${this.baseUrl}/barangs`);
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  addBarang(barang: any): Observable<any> {
    return this.http.post<any>(
      `${this.baseUrl}/barangs`,
      barang,
      this.httpOptions
    );
  }

  find(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/barang/${id}`);
  }

  update(id: number, barang: any): Observable<any> {
    return this.http.put(
      `${this.baseUrl}/barang/${id}`,
      barang,
      this.httpOptions
    );
  }

  deleteBarang(id: any): Observable<any> {
    return this.http.delete<any>(
      `${this.baseUrl}/barang/${id}`,
      this.httpOptions
    );
  }
}
