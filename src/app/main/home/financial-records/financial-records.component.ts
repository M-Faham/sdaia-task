import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Entity } from 'src/app/@core/models/entity.interface';
import { HomeTab } from 'src/app/@core/models/homeTab';

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
    this._httpClient.get<HomeTab[]>('').subscribe({
      next: (res) => {
        this.tabs = res;
      },
      error: () => { this.tabs = TABS; }
    });
  }
  getEntities(): void {
    this._httpClient.get<Entity[]>('').subscribe({
      next: (res) => {
        this.entities = res;
      },
      error: () => { this.entities = ENTITIES; }
    });
  }
}




const TABS: HomeTab[] = [
  {
    name: 'العدد الكلي',
    number: 3,
    id: 0
  },
  {
    name: 'السجلات الفرعية',
    number: 1,
    id: 1
  },
  {
    name: 'عدد سجلات المؤسسات',
    number: 3,
    id: 2
  },
  {
    name: 'السجلات المفضلة',
    number: 0,
    id: 3
  }
]

const ENTITIES: Entity[] = [
  {
    name: 'مؤسسة خالد للسياحة متعددة الانشطة',
    enitityNumber: '70021021',
    expirationDate: '22/12/2012',
    id: '1',
    recordNumber: '1023102',
    registrationStatus: 'قائم',
    registrationType: 'سجل رئيسي',
    starred: false,
    type: 'مؤسسة',
  },
  {
    name: 'مؤسسة سعد للسياحة نشاط فردي',
    enitityNumber: '70021021',
    expirationDate: '22/12/2012',
    id: '1',
    recordNumber: '1023102',
    registrationStatus: 'قائم',
    registrationType: 'سجل رئيسي',
    starred: true,
    type: 'مؤسسة',
    registrationWarning: 'warning',
  },
  {
    name: 'مؤسسة قاسم للسياحة ثنائية النشاط ',
    enitityNumber: '70021021',
    expirationDate: '22/12/2012',
    id: '1',
    recordNumber: '1023102',
    registrationStatus: 'مشطوب',
    registrationType: 'فرعي',
    starred: false,
    type: 'مؤسسة',
    registrationWarning: 'disabled',
  },
]