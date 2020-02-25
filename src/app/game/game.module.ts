import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { WordComponent } from './components/word/word.component';
import { HangmanComponent } from './components/hangman/hangman.component';
import { ScoreComponent } from './components/score/score.component';
import { TouchComponent } from './components/keyboard/touch/touch.component';
import { BoardComponent } from './components/board/board.component';
import { ActionsComponent } from './components/actions/actions.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [KeyboardComponent, WordComponent, HangmanComponent, ScoreComponent, TouchComponent, BoardComponent, ActionsComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    BoardComponent,
  ]
})
export class GameModule { }
