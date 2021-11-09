import { of } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { HttpErrorResponse } from '@angular/common/http';
import { PostsService } from './../../services/posts.service';
import { catchError, filter, first, tap } from 'rxjs/operators';
import { PostsStateService } from 'src/app/services/posts-state.service';


@Injectable()
export class LoadPostFacade {
  constructor(
    private readonly router: Router,
    private readonly postsService: PostsService,
    private readonly postsStateService: PostsStateService,
  ) {}

  loadPost(id: number): void {
    this.postsService.findOne(id).pipe(
      first(),
      filter((post: Post) => {
        const isValid: boolean = !!(post.title && post.body);

        if (!isValid) {
          this.postsStateService.postError$.next(
            'Post is invalid.'
          );
        }

        return isValid;
      }),
      tap(() => this.postsStateService.postError$.next(null)),
      tap((post: Post) => this.postsStateService.post$.next(post)),
      tap((post: Post) => this.router.navigateByUrl(`/posts/${post.id}`)),
      catchError((err: HttpErrorResponse) => {
        this.postsStateService.postError$.next(
          err.status === 404 ? 'Post not found' : 'Something went wrong.'
        );
        return of(err);
      })
    ).subscribe();
  }

  resetError(): void {
    this.postsStateService.postError$.next(null);
  }
}
