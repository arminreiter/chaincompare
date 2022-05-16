import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'cc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  onChangeEvent(event: any) {
    this.dataService.changeSearch(event.target.value);
  }

}
