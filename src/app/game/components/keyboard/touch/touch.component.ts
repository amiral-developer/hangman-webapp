import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { attemptCharacter } from 'src/app/shared/store/actions/game.action';
import { IState } from 'src/app/shared/store/state';

@Component({
  selector: 'app-touch',
  templateUrl: './touch.component.html',
  styleUrls: ['./touch.component.scss']
})
export class TouchComponent {
  @Input() public letter: string;
  @Input() public disabled: boolean;

  constructor(private store: Store<IState>) { }

  onClick() {
    if (!this.disabled) {
      this.store.dispatch(attemptCharacter({ character: this.letter }));
    }
  }

}
