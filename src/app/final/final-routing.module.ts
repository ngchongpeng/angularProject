import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { P01Component } from './p01/p01.component';
import { P02Component } from './p02/p02.component';
import { P03Component } from './p03/p03.component';
import { P04Component } from './p04/p04.component';
import { P05Component } from './p05/p05.component';
import { P06Component } from './p06/p06.component';

const routes: Routes = [
  { path: 'p01', component: P01Component },
  { path: 'p02', component: P02Component },
  { path: 'p03', component: P03Component },
  { path: 'p04', component: P04Component },
  { path: 'p05', component: P05Component },
  { path: 'p06', component: P06Component },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinalRoutingModule { }
