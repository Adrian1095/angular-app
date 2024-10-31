import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { CompanyService } from "../../services/company.service";

@Component({
    selector: 'company-list',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './company-list.component.html'    
  })

export class CompanyListComponent implements OnInit {
    companyNumber: string = '';
    companies: any = {};
    totalResults: number = 0;
    paginatedCompanies: any[] = [];
  
    itemsPerPage: number = 3;
    currentPage: number = 1;
    totalPages: number = 0;
  
    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private companyService: CompanyService      
    ) {}
    
    ngOnInit(): void {
        this.companyNumber = this.route.snapshot.paramMap.get('companyNumber')!;
        this.companyService.searchCompanies(this.companyNumber).subscribe(response => {
        this.companies = response.items;
        this.setupPagination();
    });
    }


    setupPagination(): void {
      this.totalPages = Math.ceil(this.companies.length / this.itemsPerPage);
      this.paginate();
    }
  
    paginate(): void {
      const startIndex: number = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex: number = startIndex + this.itemsPerPage;
      this.paginatedCompanies = this.companies.slice(startIndex, endIndex);
    }
  
    nextPage(): void {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.paginate();
      }
    }
  
    prevPage(): void {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.paginate();
      }
    }

}