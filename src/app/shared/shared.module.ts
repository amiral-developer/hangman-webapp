import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { gameReducer } from './store/reducers/game.reducer';
import { EffectsModule } from '@ngrx/effects';
import { GameEffects } from './store/effects/game.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({ gameState: gameReducer }),
    EffectsModule.forRoot([GameEffects]),
  ]
})
export class SharedModule { }
