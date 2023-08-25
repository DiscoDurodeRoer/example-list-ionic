import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListStandardPage } from './list-standard.page';

const routes: Routes = [
  {
    path: '',
    component: ListStandardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListStandardPageRoutingModule {}
