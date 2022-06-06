import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarItemComponent } from './sidebar/components/sidebar-item/sidebar-item.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  declarations: [SidebarComponent, SidebarItemComponent],
  exports: [SidebarComponent],
})
export class LayoutModule { }
