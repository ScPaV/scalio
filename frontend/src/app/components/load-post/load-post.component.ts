import { Observable } from 'rxjs';
import { LoadPostFacade } from './facade';
import { Component, Inject} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { postErrorProvider, POST_LOAD_ERROR_TOKEN } from './providers';


@Component({
  selector: 'app-load-post',
  templateUrl: './load-post.component.html',
  styleUrls: ['./load-post.component.scss'],
  providers: [LoadPostFacade, postErrorProvider]
})
export class LoadPostComponent {
  form: FormGroup = new FormGroup({
    postId: new FormControl(null, Validators.required)
  });

  constructor(
    private readonly facade: LoadPostFacade,
    @Inject(POST_LOAD_ERROR_TOKEN) public readonly postLoadError$: Observable<boolean>
  ) {}

  loadPost(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.facade.loadPost(this.form.value.postId);
  }
}
