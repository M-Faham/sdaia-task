import { Component } from '@angular/core';
import { SidebarService } from './layout/sidebar/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public sidebarService: SidebarService) { }
  toggleNav(): void {
    this.sidebarService.toggle();
  }
}
