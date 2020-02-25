import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { GameEffects } from './store/effects/game.effects';
import { gameReducer } from './store/reducers/game.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({ game: gameReducer }),
    EffectsModule.forRoot([GameEffects]),
  ]
})
export class SharedModule { }
