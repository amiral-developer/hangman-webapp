import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { WordComponent } from './components/word/word.component';
import { HangmanComponent } from './components/hangman/hangman.component';
import { ScoreComponent } from './components/score/score.component';



@NgModule({
  declarations: [KeyboardComponent, WordComponent, HangmanComponent, ScoreComponent],
  imports: [
    CommonModule
  ]
})
export class GameModule { }
