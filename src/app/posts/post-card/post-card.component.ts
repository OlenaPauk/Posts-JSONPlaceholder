import { PostsService } from './../../shared/posts.service';

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from 'src/app/shared/post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  localStor: any;
  localStorPosts:any;
  public post: IPost[] | any;
  public postId: number;
  constructor(private route: Router, public postsService: PostsService, private activateRoute: ActivatedRoute) {
    this.postId = activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
   this.localStor =  localStorage.getItem("posts");
   this.localStorPosts = JSON.parse(this.localStor)
  }
  back() {
    this.route.navigate(['/'])
  }
}
