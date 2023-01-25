import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewYearPageRoutingModule } from './new-year-routing.module';

import { NewYearPage } from './new-year.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewYearPageRoutingModule
  ],
  declarations: [NewYearPage]
})
export class NewYearPageModule {}
