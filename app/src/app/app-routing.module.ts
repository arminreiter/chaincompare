import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ChainComponent } from './chain/chain.component';
import { MainComponent } from './main/main.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'table', component: TableComponent},
  { path: 'about', component: AboutComponent},
  { path: 'chain/:name', component: ChainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
