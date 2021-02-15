import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesjidPageRoutingModule } from './mesjid-routing.module';

import { MesjidPage } from './mesjid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesjidPageRoutingModule
  ],
  declarations: [MesjidPage]
})
export class MesjidPageModule {}
