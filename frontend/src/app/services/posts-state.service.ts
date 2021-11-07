import { BehaviorSubject } from 'rxjs';
import { Post } from '../interfaces/post';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PostsStateService {
  post$: BehaviorSubject<Post | null> = new BehaviorSubject<Post | null>(null);
  postLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  postError$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
}
