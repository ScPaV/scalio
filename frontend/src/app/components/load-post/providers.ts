import { Observable } from "rxjs";
import { InjectionToken, Provider } from "@angular/core";
import { PostsStateService } from './../../services/posts-state.service';


export const POST_LOAD_ERROR_TOKEN: InjectionToken<Observable<boolean>> = new InjectionToken<Observable<boolean>>(
  'A stream with posts'
);

export const postErrorProvider: Provider = {
  provide: POST_LOAD_ERROR_TOKEN,
  useFactory: (postsStateService: PostsStateService) => postsStateService.postError$,
  deps: [PostsStateService]
};
