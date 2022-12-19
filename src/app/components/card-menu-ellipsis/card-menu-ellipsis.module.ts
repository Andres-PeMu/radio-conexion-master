import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CardMenuEllipsisRoutingModule } from './card-menu-ellipsis-routing.module';
import { CardMenuEllipsisComponent } from './card-menu-ellipsis.component';

@NgModule({
  declarations: [CardMenuEllipsisComponent],
  imports: [
    CommonModule,
    CardMenuEllipsisRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule
  ],
  exports: [CardMenuEllipsisComponent]
})
export class CardMenuEllipsisModule { }
