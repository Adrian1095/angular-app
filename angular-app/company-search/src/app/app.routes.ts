import { Routes } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { CompanySearchComponent } from './components/company-search/company-search.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { CompanyOfficerListComponent } from './components/company-officer-list/company-officer-list.component';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [            
            { path: '', component: CompanySearchComponent  },
            { path: 'search-results/:companySearch', component: CompanyListComponent },
            { path: 'company/:companyNumber', component: CompanyDetailsComponent },
            { path: 'company-officers', component: CompanyOfficerListComponent }
        ]
    }
];
