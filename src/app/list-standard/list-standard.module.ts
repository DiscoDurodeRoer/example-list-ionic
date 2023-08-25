import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListStandardPageRoutingModule } from './list-standard-routing.module';

import { ListStandardPage } from './list-standard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListStandardPageRoutingModule
  ],
  declarations: [ListStandardPage]
})
export class ListStandardPageModule {}
