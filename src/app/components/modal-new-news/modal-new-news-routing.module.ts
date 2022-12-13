import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalNewNewsComponent } from './modal-new-news.component';

const routes: Routes = [
  {
    path: '',
    component: ModalNewNewsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalNewNewsRoutingModule { }
