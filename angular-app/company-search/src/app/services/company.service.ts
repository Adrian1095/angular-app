import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {    
  private headers: HttpHeaders = new HttpHeaders({ 'x-api-key': environment.apiKey });

  constructor(private http: HttpClient) {}

  searchCompanies(query: string): Observable<any> {    
    return this.http.get(`/TruProxyAPI/rest/Companies/v1/Search?Query=${query}`, { headers: this.headers });
  }

  getCompanyOfficers(companyNumber: string): Observable<any> {    
    return this.http.get(`/TruProxyAPI/rest/Companies/v1/Officers?CompanyNumber=${companyNumber}`, { headers: this.headers });
  }
}