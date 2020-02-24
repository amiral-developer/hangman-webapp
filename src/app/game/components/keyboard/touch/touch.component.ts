import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-touch',
  templateUrl: './touch.component.html',
  styleUrls: ['./touch.component.scss']
})
export class TouchComponent implements OnInit {
  @Input() public letter: string;

  constructor() { }

  ngOnInit(): void {
  }

}
