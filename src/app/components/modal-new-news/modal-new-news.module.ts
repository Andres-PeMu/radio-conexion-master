import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ModalNewNewsComponent } from './modal-new-news.component';
import { ModalNewNewsRoutingModule } from './modal-new-news-routing.module';


@NgModule({
  declarations: [ModalNewNewsComponent],
  imports: [
    CommonModule,
    ModalNewNewsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule
  ],
  exports: [ModalNewNewsComponent]
})
export class ModalNewNewsModule { }
