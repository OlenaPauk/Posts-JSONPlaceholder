import { IPost } from './post';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  public posts: IPost[]= [];

  constructor(private http: HttpClient) { }
  getPosts(start: number, limit: number) {
    return this.http.get<IPost>(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`).subscribe((data: any) => {
       this.posts.push(...data);
       localStorage.setItem("posts",JSON.stringify(this.posts))
    })
  }
 
}
