import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { EntityComponent } from './components/entity/entity.component';
import { FinancialRecordsComponent } from './financial-records/financial-records.component';
import { HomeComponent } from './home.component';
import { HomeRotuingModule } from './home.routing';
import { StatCardComponent } from './stats/components/stat-card/stat-card.component';
import { StatsComponent } from './stats/stats.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRotuingModule,
    NgbNavModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbDropdownModule,
  ],
  declarations: [HomeComponent, EntityComponent, FinancialRecordsComponent, StatsComponent, StatCardComponent]
})
export class HomeModule { }
