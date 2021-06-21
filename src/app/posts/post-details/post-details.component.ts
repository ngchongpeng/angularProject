import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/_services/posts.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: any;

  constructor(private postsService: PostsService, private route: ActivatedRoute) { }

  ngOnInit() {
    let postId = this.route.snapshot.paramMap.get('id');
    this.postsService.getSinglePost(postId).subscribe(
      (data) => {
        this.post = data;
      }
    );
  }
}
