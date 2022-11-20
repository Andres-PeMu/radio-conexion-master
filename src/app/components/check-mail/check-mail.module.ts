import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CheckMailComponent } from './check-mail.component';
import { CheckMailRoutingModule } from './check-mail-routing.module';


@NgModule({
  declarations: [CheckMailComponent, ],
  imports: [
    CommonModule,
    CheckMailRoutingModule,
    FormsModule,
    IonicModule
  ],
  exports: [CheckMailComponent]
})
export class CheckMailModule { }
