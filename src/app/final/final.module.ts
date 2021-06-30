import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FinalRoutingModule } from './final-routing.module';
import { P01Component } from './p01/p01.component';
import { P02Component } from './p02/p02.component';
import { P03Component } from './p03/p03.component';
import { P04Component } from './p04/p04.component';
import { P05Component } from './p05/p05.component';
import { P06Component } from './p06/p06.component';
import { NgxEchartsModule } from 'ngx-echarts';


@NgModule({
  declarations: [P01Component, P02Component, P03Component, P04Component, P05Component, P06Component],
  imports: [
    CommonModule,
    FinalRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ]
})
export class FinalModule { }
