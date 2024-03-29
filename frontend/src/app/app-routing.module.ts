import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitialComponent } from './components/initial/initial.component';
import { BoardComponent } from './components/board/board.component';

const routes: Routes = [
  {
    path: '',
    component: InitialComponent
  },
  {
    path: 'board',
    component: BoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
