import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'cc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faGitHub = faGithub;
  
  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  onChangeEvent(event: any) {
    this.dataService.changeSearch(event.target.value);
  }

}
