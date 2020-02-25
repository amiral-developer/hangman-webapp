import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IWord } from 'src/app/shared/models/word';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnChanges {
  @Input() public word: IWord;

  public lettersOnFirstLine = ['A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  public lettersOnSecondLine = ['Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M'];
  public lettersOnThirdLine = ['W', 'X', 'C', 'V', 'B', 'N'];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
  }

}
