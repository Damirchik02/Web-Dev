import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacancy } from '../interfaces/vacancy';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  private apiUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) {}

  getVacancies(company_id: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.apiUrl}companies/${company_id}/vacancies/`);
  }
}