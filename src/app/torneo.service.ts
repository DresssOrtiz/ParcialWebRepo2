import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Torneo } from './torneo.model';

@Injectable({ providedIn: 'root' })
export class TorneoService {
  private readonly apiUrl = 'http://localhost:8080/api/torneos';

  constructor(private readonly http: HttpClient) {}

  listar(): Observable<Torneo[]> {
    return this.http.get<Torneo[]>(this.apiUrl);
  }

  crear(torneo: Torneo): Observable<Torneo> {
    return this.http.post<Torneo>(this.apiUrl, torneo);
  }
}
