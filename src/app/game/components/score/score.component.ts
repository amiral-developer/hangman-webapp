import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { IWord } from 'src/app/shared/models/word';
import { IUser } from 'src/app/shared/models/user';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnChanges {
  @Input() public word: IWord;
  @Input() public user: IUser;
  public wordsFound: number;
  public lifesRemaining: number;
  public jokersRemaining: number;

  constructor() { }

  ngOnChanges(): void {
    if (this.user) {
      this.wordsFound = this.user.wordsFound.length;
      this.jokersRemaining = this.user.jokers;
    }

    if (this.word) {
      this.lifesRemaining = this.word.lifesRemaining;
    }

  }

}
