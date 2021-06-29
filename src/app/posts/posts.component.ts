import { Component, OnInit } from '@angular/core';
import { PostsService } from '../_services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;
  query: string;

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }
}
