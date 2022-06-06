import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { NAVIGATIONS } from './navigation';
import { SidebarService } from './sidebar.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})

export class SidebarComponent {
  icons = {
    user: faUser,
    arrow: faArrowRightFromBracket,
  }
  navs = NAVIGATIONS;
  user = {
    fullname: 'أحمد خالد الغامدي القحطاني'
  }
  constructor(private _sidebarService: SidebarService) { }
  toggleNav(): void {
    this._sidebarService.toggle();
  }
}
