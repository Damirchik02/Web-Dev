import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacancyService } from '../services/vacancy.service';
import { Vacancy } from '../interfaces/vacancy';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-vacancy-list',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './vacancy-list.component.html',
  styleUrl: './vacancy-list.component.scss'
})
export class VacancyListComponent implements OnInit, OnChanges {
  @Input() companyID!: number;
  vacancies: Vacancy[] = [];
  
  constructor(private vacancy_service: VacancyService) {}
  
  ngOnInit(): void {
    this.loadVacancies();
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['companyID']) {
      this.loadVacancies();
    }
  }
  
  loadVacancies(): void {
    if (this.companyID) {
      this.vacancy_service.getVacancies(this.companyID).subscribe(v => {
        this.vacancies = v;
      });
    }
  }
}