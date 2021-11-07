import { first } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { PostsService } from './../../services/posts.service';


@Injectable()
export class LoadPostsFacade {
  constructor(
    private readonly postsService: PostsService
  ) {}

  loadPosts(): void {
    this.postsService.find().pipe(
      first()
    ).subscribe();
  }
}
