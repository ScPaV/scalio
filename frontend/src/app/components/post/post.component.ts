import { Observable } from 'rxjs';
import { Post } from 'src/app/interfaces/post';
import { postProvider, POST_TOKEN } from './providers';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [postProvider],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent {
  constructor(
    @Inject(POST_TOKEN) public readonly post$: Observable<Post>
  ) {}
}
