import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Stat } from 'src/app/@core/models/stat.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  stats: Stat[] = [];

  constructor(private _httpClient: HttpClient) { }

  ngOnInit() {
    this.getStats();
  }


  getStats(): void {
    const url = environment.apiBase + 'stats';
    this._httpClient.get<Stat[]>(url).subscribe({
      next: (res) => {
        this.stats = res;
      },
    });
  }
}
