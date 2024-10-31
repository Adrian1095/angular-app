import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {DatePipe, CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule, DatePipe, CommonModule],
  templateUrl: './company-search.component.html',  
})
export class CompanySearchComponent implements OnInit {
  title = 'company-search';
  form: FormGroup;
  companies: any[];
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder, private router: Router) {
    
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      companySearch: [null, [Validators.required]],      
    });
    this.companies = [];
	}

  searchCompanies(): void {
    if (this.form.valid) {
      this.errorMessage = '';
      this.router.navigate(['/search-results', this.form.value.companySearch?.toString()]);
    }

    this.errorMessage = 'Please enter a valid company name or number.';
  } 
}


