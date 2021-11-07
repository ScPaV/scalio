import { Response } from 'express';
import { Observable, of } from 'rxjs';
import { Post } from 'src/interfaces/post';
import { ResError } from 'src/interfaces/error';
import { catchError, tap } from 'rxjs/operators';
import { PostService } from './../services/post.service';
import { Controller, Get, Param, Res } from '@nestjs/common';


@Controller('posts')
export class PostController {
  constructor(
    private readonly postService: PostService
  ) {}

  @Get()
  posts(@Res() res: Response): Observable<Post[] | ResError> {
    return this.postService.find().pipe(
      tap((posts: Post[]) => posts.length ? res.json(posts) : res.status(404).send()),
      catchError((err: ResError) => {
        res.status(500).json({ message: err });
        return of(err);
      })
    );
  }

  @Get(':id')
  post(@Param('id') id: string, @Res() res: Response): Observable<Post | ResError> {
    return this.postService.findOne(id).pipe(
      tap((post: Post) => post ? res.json(post) : res.status(404).send()),
      catchError((err: ResError) => {
        res.status(500).json({ message: err });
        return of(err);
      })
    );
  }
}
