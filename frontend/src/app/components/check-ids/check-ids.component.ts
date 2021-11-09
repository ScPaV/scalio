import { LoadPostsFacade } from './facade';
import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'app-check-ids',
  templateUrl: './check-ids.component.html',
  styleUrls: ['./check-ids.component.scss'],
  providers: [LoadPostsFacade],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckIdsComponent {
  constructor(
    private readonly facade: LoadPostsFacade
  ) {}

  loadPosts(): void {
    this.facade.loadPosts();
  }
}
