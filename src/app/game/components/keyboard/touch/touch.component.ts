import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IGame } from 'src/app/shared/models/game';
import { attemptCharacter } from 'src/app/shared/store/actions/game.action';
import { IState } from 'src/app/shared/store/state';

@Component({
  selector: 'app-touch',
  templateUrl: './touch.component.html',
  styleUrls: ['./touch.component.scss']
})
export class TouchComponent implements OnInit {
  @Input() public letter: string;

  constructor(private store: Store<IState>) { }

  ngOnInit(): void {
  }

  onClick() {
    this.store.dispatch(attemptCharacter({ character: this.letter }));
  }

}
