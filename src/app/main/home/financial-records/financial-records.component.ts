import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Entity } from 'src/app/@core/models/entity.interface';
import { HomeTab } from 'src/app/@core/models/homeTab';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-financial-records',
  templateUrl: './financial-records.component.html',
  styleUrls: ['./financial-records.component.scss']
})
export class FinancialRecordsComponent implements OnInit {

  tabs: HomeTab[] = [];
  entities: Entity[] = [];

  constructor(private _httpClient: HttpClient) { }

  ngOnInit() {
    this.getHomeTabs();
    this.getEntities();
  }
  getHomeTabs(): void {
    const url = environment.apiBase + 'tabs';
    this._httpClient.get<HomeTab[]>(url).subscribe({
      next: (res) => {
        this.tabs = res;
      },
    });
  }
  getEntities(): void {
    const url = environment.apiBase + 'entities';
    this._httpClient.get<Entity[]>(url).subscribe({
      next: (res) => {
        this.entities = res;
      },
    });
  }
}




