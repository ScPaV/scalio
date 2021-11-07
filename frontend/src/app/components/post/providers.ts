import { Observable } from "rxjs";
import { InjectionToken, Provider } from "@angular/core";
import { PostsStateService } from './../../services/posts-state.service';
import { Post } from "src/app/interfaces/post";


export const POST_TOKEN: InjectionToken<Observable<Post>> = new InjectionToken<Observable<Post>>(
  'A stream with a post'
);

export const postProvider: Provider = {
  provide: POST_TOKEN,
  useFactory: (postsStateService: PostsStateService) => postsStateService.post$,
  deps: [PostsStateService]
};
