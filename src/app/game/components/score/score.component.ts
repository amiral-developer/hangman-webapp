import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  public wordsFound: number = 10;
  public lifesRemaining: number = 6;

  constructor() { }

  ngOnInit(): void {
  }

}
