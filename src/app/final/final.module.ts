import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinalRoutingModule } from './final-routing.module';
import { P01Component } from './p01/p01.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { P02Component } from './p02/p02.component';
import { P03Component } from './p03/p03.component';
import { P04Component } from './p04/p04.component';
import { P05Component } from './p05/p05.component';
import { P06Component } from './p06/p06.component';
// import { ChartsModule } from 'ng2-charts'


@NgModule({
  declarations: [P01Component, P02Component, P03Component, P04Component, P05Component, P06Component],
  imports: [
    CommonModule,
    FinalRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // ChartsModule,
  ]
})
export class FinalModule { }
