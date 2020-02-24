import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.scss']
})
export class HangmanComponent implements OnInit {
  public lifes: number;

  // static : load canvas before change detection runs
  @ViewChild('canvas', { static: true }) private canvas: ElementRef<HTMLCanvasElement>;
  private contextCanvas: CanvasRenderingContext2D;

  constructor() { }

  ngOnInit(): void {
    if (this.canvas && this.canvas.nativeElement && this.canvas.nativeElement.getContext) {
      this.contextCanvas = this.canvas.nativeElement.getContext('2d');
      this.drawBase();
      this.drawSupport();
      this.drawHead();
      this.drawBody();
      this.drawArms();
      this.drawLegs();
    }
  }

  private drawBase() {
    // |
    this.drawLine(40, 290, 40, 40);

    // _
    this.drawLine(20, 290, 250, 290);
  }

  private drawSupport() {
    // _
    this.drawLine(40, 40, 210, 40);

    // /
    this.drawLine(40, 80, 80, 40);

    // |
    this.drawLine(210, 40, 210, 80);
  }

  private drawHead() {
    this.contextCanvas.beginPath();

    // head
    // this.contextCanvas.arc(75, 75, 50, 0, Math.PI * 2, true);
    // this.contextCanvas.moveTo(110, 75);
    this.contextCanvas.arc(210, 105, 25, 0, Math.PI * 2, true);

    // mouth
    this.contextCanvas.moveTo(195, 110);
    this.contextCanvas.arc(210, 110, 15, 0, Math.PI, false);

    // left eye
    this.contextCanvas.moveTo(204, 97);
    this.contextCanvas.arc(199, 97, 5, 0, Math.PI * 2, true);

    // // right eye
    this.contextCanvas.moveTo(224, 97);
    this.contextCanvas.arc(219, 97, 5, 0, Math.PI * 2, true);

    this.contextCanvas.stroke();
  }

  private drawBody() {
    this.drawLine(210, 130, 210, 190);
  }

  private drawArms() {
    // left arm
    this.drawLine(210, 130, 190, 170);

    // right arm
    this.drawLine(210, 130, 230, 170);
  }

  private drawLegs() {
    // left leg
    this.drawLine(210, 190, 190, 230);

    // right leg
    this.drawLine(210, 190, 230, 230);
  }

  private drawLine(startX: number, startY: number, endX: number, endY: number) {
    this.contextCanvas.beginPath();
    this.contextCanvas.moveTo(startX, startY);
    this.contextCanvas.lineTo(endX, endY);
    this.contextCanvas.stroke();
  }


}
