import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ModalSearchComponent } from './modal-search.component';
import { ModalSearchRoutingModule } from './modal-search-routing.module';


@NgModule({
  declarations: [ModalSearchComponent],
  imports: [
    CommonModule,
    ModalSearchRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule
  ],
  exports: [ModalSearchComponent]
})
export class ModalSearchModule { }
