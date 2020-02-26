import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IGame } from 'src/app/shared/models/game';
import { loadGame, changeWord } from 'src/app/shared/store/actions/game.action';
import { IState } from 'src/app/shared/store/state';
import { DialogComponent, IDialogData } from 'src/app/shared/components/dialog/dialog.component';
import { JOKER_WINS } from 'src/app/shared/config-game';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, OnDestroy {
  public game$: Observable<IGame>;
  public gameSubscriber: Subscription;

  constructor(private store: Store<IState>, public dialog: MatDialog) {
    this.game$ = this.store.select(state => state.gameState.game);
  }

  ngOnInit(): void {
    this.store.dispatch(loadGame());

    this.gameSubscriber = this.game$.subscribe(game => {
      if (game.currentWord) {
        if (game.currentWord.isLose) {
          this.openDialog('Perdu !', `Le mot à trouver était ${game.currentWord.text} ! Retente ta chance avec ce nouveau mot ;)`, () => {
            this.store.dispatch(changeWord());
          });
        } else if (game.currentWord.isWin) {
          this.openDialog('Gagné !', `Bien joué, tu gagnes ${JOKER_WINS} jokers, ne t\'arrête pas en si bon chemin ! ;)`, () => {
            this.store.dispatch(changeWord());
          });
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.gameSubscriber.unsubscribe();
  }

  openDialog(title: string, content: string, callback?: () => void): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { title, content } as IDialogData,
    });

    dialogRef.afterClosed().subscribe(callback);
  }

}
