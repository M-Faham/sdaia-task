import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  isShown = false;

  constructor() { }
  toggle(): void {
    this.isShown = !this.isShown;
  }
}
