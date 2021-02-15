import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesjidPage } from './mesjid.page';

const routes: Routes = [
  {
    path: '',
    component: MesjidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesjidPageRoutingModule {}
