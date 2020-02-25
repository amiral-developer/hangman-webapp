import { Component, OnInit } from '@angular/core';
import { IState } from 'src/app/shared/store/state';
import { Store } from '@ngrx/store';
import { changeWord } from 'src/app/shared/store/actions/game.action';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  constructor(private store: Store<IState>) { }

  ngOnInit(): void {
  }

  public changeWord() {
    this.store.dispatch(changeWord());

  }
}
