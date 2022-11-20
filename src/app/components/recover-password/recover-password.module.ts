import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecoverPasswordComponent } from './recover-password.component';
import { RecoverPasswordRoutingModule } from './recover-password-routing.module';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RecoverPasswordRoutingModule, ReactiveFormsModule],
  declarations: [RecoverPasswordComponent],
  exports: [RecoverPasswordComponent]
})
export class RecoverPasswordComponentModule {}
