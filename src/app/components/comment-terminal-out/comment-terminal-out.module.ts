import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CommentTerminalOutRoutingModule } from './comment-terminal-out-routing.module';
import { CommentTerminalOutComponent } from './comment-terminal-out.component';

@NgModule({
  declarations: [CommentTerminalOutComponent],
  imports: [
    CommonModule,
    CommentTerminalOutRoutingModule,
    IonicModule,
    FormsModule
  ],
  exports: [CommentTerminalOutComponent]
})
export class CommentTerminalOutModule { }
