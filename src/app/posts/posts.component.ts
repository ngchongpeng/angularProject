import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PushNotificationService } from 'ng-push-notification';
import { PostsService } from '../_services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe({
      next: data => { this.posts = data; },
      error: error => {
        if (error.status == '404') {

        };
      }
    });
  }

  trackByFn(index) {

  }
}
