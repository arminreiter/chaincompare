import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'cc-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  chainData = this.dataService.data;
  search: string = '';

  constructor(public dataService: DataService) { 
    this.dataService.search.subscribe(data => {
      this.search = data;
      this.chainData = this.dataService.data.filter((x: any) =>
       JSON.stringify(x).toLowerCase().match(this.search.toLowerCase()));
    });
  }

  ngOnInit(): void {
  }

}
