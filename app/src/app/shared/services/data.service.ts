import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import * as ChainData from '../../../assets/chaindata.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: any = (ChainData as any).default;
  private searchSource = new BehaviorSubject<string>('');
  search = this.searchSource.asObservable();

  changeSearch(search: string) {
    this.searchSource.next(search);
  }
}
