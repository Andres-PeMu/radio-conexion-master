import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WithGoogleComponent } from './with-google.component';

const routes: Routes = [
  {
    path: '',
    component: WithGoogleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WithGoogleRoutingModule { }
