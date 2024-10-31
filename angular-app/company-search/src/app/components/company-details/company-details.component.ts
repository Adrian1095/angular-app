import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {CompanyService} from "../../services/company.service";

@Component({
  selector: 'app-company-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './company-details.component.html',  
})
export class CompanyDetailsComponent implements OnInit {
  companyNumber: string = '';
  companyDetails: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private companyService: CompanyService,
  ) {}

  ngOnInit(): void {
    this.companyNumber = this.route.snapshot.paramMap.get('companyNumber')!;
    this.companyService.searchCompanies(this.companyNumber).subscribe(response => {
      this.companyDetails = response.items[0];
    });
  }

  routeOfficers() {
    this.router.navigate(['/company-officers'], {
      state: {
        companyName: this.companyDetails.title,
        companyNumber: this.companyDetails.company_number
      }
    });
  }
}