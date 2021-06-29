import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from '../_pipes/search-filter.pipe';
import { Posts2Component } from './posts2/posts2.component';
import { PipePipe } from '../_pipes/pipe.pipe';


@NgModule({
  declarations: [
    PostsComponent,
    PostDetailsComponent,
    Posts2Component,
    SearchFilterPipe,
    PipePipe,
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    FormsModule,
  ]
})
export class PostsModule { }
