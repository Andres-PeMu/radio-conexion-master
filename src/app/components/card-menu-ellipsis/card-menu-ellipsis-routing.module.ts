import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardMenuEllipsisComponent } from './card-menu-ellipsis.component';

const routes: Routes = [
  {
    path: '',
    component: CardMenuEllipsisComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardMenuEllipsisRoutingModule { }
