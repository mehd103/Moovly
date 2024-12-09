import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoovlyhomePage } from './moovlyhome.page';

const routes: Routes = [
  {
    path: '',
    component: MoovlyhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoovlyhomePageRoutingModule {}
