import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'cc-chain',
  templateUrl: './chain.component.html',
  styleUrls: ['./chain.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChainComponent implements OnInit {
  data = this.dataService.data;
  chain: any;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      var name = params['name'];
      var curr = this.data.filter((e: any) => { return e.name.toLowerCase() === name.toLowerCase() });
      if(curr.length > 0) {
        this.chain = curr[0];
      }
    })
  }

  link(input: string[]) {
    var result = '';

    input.forEach(x => {
      result += '<a class="link" href="' + x + '">' + x + '</a><br />';
    })
    return result;
  }

}
