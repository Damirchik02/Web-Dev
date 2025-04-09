import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyService } from '../services/company.service';
import { Company } from '../interfaces/company';
import { HttpClientModule } from '@angular/common/http';
import { VacancyListComponent } from '../vacancy-list/vacancy-list.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, VacancyListComponent, FormsModule],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss'
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  company_id!: number

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(data => this.companies = data);
  }

  showVacancies(cmp_id: number): void {
    console.log(`Company ID selected: ${cmp_id}`);
    this.company_id = cmp_id
  }
}