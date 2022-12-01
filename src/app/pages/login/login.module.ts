import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { WithGoogleModule } from 'src/app/components/with-google/with-google.module';

import { LoginComponent } from './login.component';


import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, LoginRoutingModule, ReactiveFormsModule, WithGoogleModule],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginComponentModule {}
