import { Component, Input, OnInit } from '@angular/core';
import { Stat } from 'src/app/@core/models/stat.interface';

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.scss']
})
export class StatCardComponent implements OnInit {

  @Input() stat: Stat;

  constructor() { }

  ngOnInit() {
  }

}
