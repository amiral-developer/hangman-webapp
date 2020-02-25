import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IGame } from 'src/app/shared/models/game';
import { Store } from '@ngrx/store';
import { loadGame } from 'src/app/shared/store/actions/game.action';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  public game$: Observable<IGame>;

  constructor(private store: Store<{ game: IGame }>) {
    this.game$ = this.store.select(state => state.game);
  }

  ngOnInit(): void {
    this.store.dispatch(loadGame());
  }

}
