import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { NewsCardComponent } from './news-card.component';
import { NewsCardRoutingModule } from './news-card-routing.module';


@NgModule({
  declarations: [NewsCardComponent],
  imports: [
    CommonModule,
    NewsCardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule
  ],
  exports: [NewsCardComponent]
})
export class NewsCardModule { }
