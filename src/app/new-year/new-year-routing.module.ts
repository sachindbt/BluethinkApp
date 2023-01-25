import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewYearPage } from './new-year.page';

const routes: Routes = [
  {
    path: '',
    component: NewYearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewYearPageRoutingModule {}
