import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss']
})
export class WordComponent implements OnInit {
  @Input() public word: string = 'SALUT';
  public wordCharacters: string[];

  constructor() { }

  ngOnInit(): void {
    this.wordCharacters = this.word.split('');
  }

}
