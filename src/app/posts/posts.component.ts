import { PostsService } from './../shared/posts.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  start: number = 0;
  limit: number = 10;
  showButton: boolean = true;
  constructor(public postsService: PostsService) { }

  ngOnInit(): void {
    if (this.postsService.posts.length === 0) {
      this.getPosts()
    }
  }
  getPosts() {
    this.postsService.getPosts(this.start, this.limit)
  }
  showMore() {
    this.start += this.limit;
    this.getPosts();
    if(this.start>=81){
      this.showButton=false
    }
  }


}
