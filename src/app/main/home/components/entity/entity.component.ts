import { Component, Input, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faEllipsisVertical, faStar as starSolid } from '@fortawesome/free-solid-svg-icons';
import { Entity } from 'src/app/@core/models/entity.interface';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss']
})
export class EntityComponent implements OnInit {
  @Input() entity: Entity;
  icons = {
    star: faStar,
    starSolid: starSolid,
    more: faEllipsisVertical
  }
  constructor() { }

  ngOnInit() {
  }

}
