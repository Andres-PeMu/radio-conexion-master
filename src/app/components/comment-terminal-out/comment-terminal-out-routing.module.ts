import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentTerminalOutComponent } from './comment-terminal-out.component';

const routes: Routes = [
  {
    path: '',
    component: CommentTerminalOutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentTerminalOutRoutingModule { }
