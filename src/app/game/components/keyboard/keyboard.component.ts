import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {
  public lettersOnFirstLine = ['A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  public lettersOnSecondLine = ['Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M'];
  public lettersOnThirdLine = ['W', 'X', 'C', 'V', 'B', 'N'];

  constructor() { }

  ngOnInit(): void {
  }

}
