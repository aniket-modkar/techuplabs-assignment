import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HttpHelperService {
  _httpClient = inject(HttpClient);

  post<T extends object>(
    path: string,
    body: Object = {},
    options: Object = {}
  ): Observable<T> {
    return this._httpClient.post<T>(`${path}`, body, options);
  }

  get<T extends object>(
    path: string,
    params: HttpParams = new HttpParams()
  ): Observable<T> {
    return this._httpClient.get<T>(`${path}`, { params });
  }
}
