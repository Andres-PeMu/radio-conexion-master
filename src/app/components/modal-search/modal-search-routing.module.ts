import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalSearchComponent } from './modal-search.component';

const routes: Routes = [
  {
    path: '',
    component: ModalSearchComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalSearchRoutingModule { }
