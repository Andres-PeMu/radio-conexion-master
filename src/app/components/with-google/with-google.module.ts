import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { WithGoogleComponent } from './with-google.component';
import { WithGoogleRoutingModule } from './with-google-routing.module';


@NgModule({
  imports: [
    CommonModule,
    WithGoogleRoutingModule,
    IonicModule
  ],
  declarations: [WithGoogleComponent],
  exports: [WithGoogleComponent]
})
export class WithGoogleModule { }
