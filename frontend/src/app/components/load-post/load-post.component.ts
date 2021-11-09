import { LoadPostFacade } from './facade';
import { Observable, Subject } from 'rxjs';
import { tap, filter, takeUntil } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { postErrorProvider, POST_LOAD_ERROR_TOKEN } from './providers';


@Component({
  selector: 'app-load-post',
  templateUrl: './load-post.component.html',
  styleUrls: ['./load-post.component.scss'],
  providers: [LoadPostFacade, postErrorProvider]
})
export class LoadPostComponent implements OnInit, OnDestroy {
  form: FormGroup = new FormGroup({
    postId: new FormControl(null, Validators.required)
  });

  private componentDestroy$: Subject<void> = new Subject<void>();

  constructor(
    private readonly facade: LoadPostFacade,
    @Inject(POST_LOAD_ERROR_TOKEN) public readonly postLoadError$: Observable<boolean>
  ) {}

  ngOnInit(): void {
    this.resetError();
  }

  ngOnDestroy(): void {
    this.componentDestroy$.next();
    this.componentDestroy$.complete();
  }

  loadPost(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.facade.loadPost(this.form.value.postId);
  }

  resetError(): void {
    this.form.get('postId')?.valueChanges.pipe(
      takeUntil(this.componentDestroy$),
      filter(() => this.form.valid),
      tap(() => this.facade.resetError())
    ).subscribe();
  }
}
