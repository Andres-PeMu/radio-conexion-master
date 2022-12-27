import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CommentTerminalOutRoutingModule } from './comment-terminal-out-routing.module';
import { CommentTerminalOutComponent } from './comment-terminal-out.component';
import { BadgeComponent } from './badge/badge.component';
import { RecargaDirective } from 'src/app/directives/recarga.directive';

@NgModule({
  declarations: [
    CommentTerminalOutComponent,
    BadgeComponent,
    RecargaDirective,
  ],
  imports: [
    CommonModule,
    CommentTerminalOutRoutingModule,
    IonicModule,
    FormsModule,
  ],
  exports: [
    CommentTerminalOutComponent,
    BadgeComponent,
    RecargaDirective,
  ]
})
export class CommentTerminalOutModule { }
