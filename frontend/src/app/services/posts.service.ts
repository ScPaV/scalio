import { Observable } from 'rxjs';
import { Post } from '../interfaces/post';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(
    private readonly httpClient: HttpClient
  ) {}

  find(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${environment.POSTS_SERVICE_URL}/posts`);
  }

  findOne(id: number): Observable<Post> {
    return this.httpClient.get<Post>(`${environment.POSTS_SERVICE_URL}/posts/${id}`);
  }
}
