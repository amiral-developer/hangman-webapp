import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { gameReducer } from './store/reducers/game.reducer';
import { EffectsModule } from '@ngrx/effects';
import { GameEffects } from './store/effects/game.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ game: gameReducer }),
    EffectsModule.forRoot([GameEffects]),
  ]
})
export class SharedModule { }
