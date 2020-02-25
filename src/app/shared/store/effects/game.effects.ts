import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { GameService } from '../../services/game.service';
import { loadGame, wordsLoaded } from '../actions/game.action';

@Injectable()
export class GameEffects {

    constructor(private actions$: Actions, private gameService: GameService) { }

    loadGame$ = createEffect(() => this.actions$.pipe(
        ofType(loadGame().type),
        mergeMap(() => this.gameService.loadWords()
            .pipe(
                map(words => (wordsLoaded({ words }))),
                catchError(() => EMPTY)
            ))
    )
    );

}