import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  listUser() {
    return this.http.get<any>(`${this.baseUrl}/staff`);
  }

  find(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/staff/${id}`);
  }

  update(id: number, barang: any): Observable<any> {
    return this.http.put(
      `${this.baseUrl}/staff/${id}`,
      barang,
      this.httpOptions
    );
  }

  deleteStaf(id: any): Observable<any> {
    return this.http.delete<any>(
      `${this.baseUrl}/staff/${id}`,
      this.httpOptions
    );
  }
}
