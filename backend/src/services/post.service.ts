import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from 'src/interfaces/post';
import { Injectable } from '@nestjs/common';
import { RxFileReaderUtil } from 'src/utils';


@Injectable()
export class PostService {
  static pathToDataFile: string = process.env.POSTS_FILE_PATH || 'data/posts.json';

  find(): Observable<Post[]> {
    return RxFileReaderUtil.readFile<Post[]>(PostService.pathToDataFile);
  }

  findOne(id: string): Observable<Post> {
    return RxFileReaderUtil.readFile<Post[]>(PostService.pathToDataFile).pipe(
      map((posts: Post[]) => posts.find(
        (post: Post) => post.id === +id
      ))
    );
  }
}
