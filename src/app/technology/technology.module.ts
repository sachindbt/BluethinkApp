import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TechnologyPageRoutingModule } from './technology-routing.module';

import { TechnologyPage } from './technology.page';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TechnologyPageRoutingModule,
    SwiperModule
  ],
  declarations: [TechnologyPage]
})
export class TechnologyPageModule {}
