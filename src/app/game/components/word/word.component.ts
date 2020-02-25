import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IWord } from 'src/app/shared/models/word';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss']
})
export class WordComponent implements OnChanges {
  @Input() public word: IWord;
  public wordCharacters: string[];

  constructor() { }

  ngOnChanges(): void {
    console.log(this.word);

    if (this.word) {
      this.wordCharacters = this.word.fillWord();
    }
  }

}
