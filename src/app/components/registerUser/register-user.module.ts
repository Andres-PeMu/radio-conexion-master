import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterUserComponent } from './register-user.component';
import { RegisterUserRoutingModule } from './register-user-routing.module';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RegisterUserRoutingModule, ReactiveFormsModule],
  declarations: [RegisterUserComponent],
  exports: [RegisterUserComponent]
})
export class RegisterUserComponentModule {}
