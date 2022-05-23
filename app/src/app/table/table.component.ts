import { Component, OnInit } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { ColDef, FirstDataRenderedEvent, GridApi } from 'ag-grid-community';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'cc-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  faCheck = faXmark;
  private gridApi!: GridApi; // https://www.ag-grid.com/angular-data-grid/filter-quick/
  rowData = this.dataService.data;
  search: string = '';

  constructor(public dataService: DataService) { 
    this.dataService.search.subscribe(data => {
      this.search = data;
    });
  }

  defaultColDef: ColDef = {
    resizable: true,
    sortable: true, 
    filter: true, 
  };

  columnDefs: ColDef[] = [
    { headerName: '',                         headerTooltip: 'Logo',                       field: 'logo',           cellRenderer: this.renderLogo, cellClass: 'px-1', filter: false, sortable: false, resizable: false, width: 40 },
    { headerName: 'Name',                     headerTooltip: 'Name of the Blockchain',     field: 'name',           width: 120, cellRenderer: this.renderName },
    { headerName: 'Tps',                      headerTooltip: 'Transactions per Second',    field: 'tps',            width: 82, cellClass: "text-end" },
    { headerName: 'TTF',                      headerTooltip: 'Time till Finality',         field: 'ttf',            width: 82, cellClass: "text-end" },
    { headerName: 'Block Size',               headerTooltip: 'Block Size in KB',           field: 'blockSize',      width: 120, cellClass: "text-end"},
    { headerName: 'Block Time',               headerTooltip: 'Block Time in KB',           field: 'blockTime',      width: 120, cellClass: "text-end"},
    { headerName: 'Client Language',          headerTooltip: 'Client Language(s)',         field: 'clientLanguage', width: 120 },
    { headerName: 'Consensus',                headerTooltip: 'Consensus Algorithms',       field: 'consensus',      width: 120 },
    { headerName: 'Hash Algorithm',           headerTooltip: 'Hash Algorithm',             field: 'hashAlgorithm',  width: 120  },
    { headerName: 'Smart Contract Languages', headerTooltip: 'Smart Contract Languages',   field: 'smartContractLanguages',  },
    { headerName: 'EVM',                      headerTooltip: 'EVM compatible',             field: 'evmCompatible',  width: 82, cellRenderer: this.renderCheckmarks },
    //{ headerName: 'Currency',                 headerTooltip: 'Main currency of the chain', field: 'currency.name',  width: 120 },
    { headerName: 'Creator/Maintainer',       headerTooltip: 'Organization that maintains/created the blockchain',  width: 120,       field: 'creator',  },
    { headerName: 'Headquarter',              headerTooltip: 'Headquarter',                field: 'headquarter',    cellRenderer: this.renderHeadquarter },
    { headerName: 'Launched',                 headerTooltip: 'Launch Date',                field: 'chainLaunch',    width: 82 },
    { headerName: 'Type',                     headerTooltip: 'Public or Private',          field: 'type',           width: 82 },
    { headerName: 'License',                  headerTooltip: 'Software License of the Blockchain', field: 'license',width: 120  },
    //{ headerName: 'Website',                  headerTooltip: 'Organization Website',       field: 'mainSite',       cellRenderer: this.renderHyperlink },
    //{ headerName: 'Source Code',              headerTooltip: 'Source Code',                field: 'sourceCode',     cellRenderer: this.renderHyperlink },
    //{ headerName: 'Links',                    headerTooltip: 'Relevant Hyperlinks',        field: 'links',          cellRenderer: this.renderHyperlink },
    //{ headerName: 'Block Explorer',           headerTooltip: 'URL of the Block Explorer',  field: 'blockExplorer',  cellRenderer: this.renderHyperlink },
  ];

  ngOnInit(): void {
  }

  renderName(params: any) {
    return '<b><a class="text-white text-decoration-none" href="/chain/' +params.data.name + '">' + params.data.name + '</a></b>';
  }

  renderLogo(params: any) {
    if(params.value == "") { return ""; }
    return '<img class="ps-1 m-1" height="24px" width="28px" src="' + params.value + '">';
  }

  renderCheckmarks(params: any) {
    if(params.value) // OK
      return '<svg role="img" width="20" height="20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path></svg>'; 
    // NOK
    return '<svg role="img" width="20" height="20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" class="svg-inline--fa fa-xmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"></path></svg>';
  }

  renderHeadquarter(params: any) {
    if(!params.value.country)
      return '';

    return params.value.country + ", " + params.value.city;
  }

  renderHyperlink(params: any) {
    if(!params.value)
      return '';
    

    if(Array.isArray(params.value)) {
      var result = '';
      params.value.forEach((x: string) => {
        result +=  '<a class="link-info href="' + x + '">' + x + '</a> ';
      });
      return result;
    }

    return '<a class="link-info" href="' + params.value + '">' + params.value + '</a>';
  }
  
  onFirstDataRendered(params: FirstDataRenderedEvent) {
    //params.api.sizeColumnsToFit();
  }

}
