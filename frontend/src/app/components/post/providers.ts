import { Observable } from "rxjs";
import { Post } from "src/app/interfaces/post";
import { InjectionToken, Provider } from "@angular/core";
import { PostsStateService } from './../../services/posts-state.service';


export const POST_TOKEN: InjectionToken<Observable<Post>> = new InjectionToken<Observable<Post>>(
  'A stream with a post'
);

export const postProvider: Provider = {
  provide: POST_TOKEN,
  useFactory: (postsStateService: PostsStateService) => postsStateService.post$,
  deps: [PostsStateService]
};
