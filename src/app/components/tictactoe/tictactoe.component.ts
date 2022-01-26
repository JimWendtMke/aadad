import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.scss']
})
export class TictactoeComponent implements OnInit {
  boxCount: number;
  rows: number[];
  cols: number[]
  boxes: object[] = [];
  turn: '' | 'O' | 'X'
  errorText: string = '';
  winner: string;

  constructor( ) {
    this.boxCount = 3;
    this.rows = Array(this.boxCount).fill(0);
    this.cols = Array(this.boxCount).fill(0);
  }

  ngOnInit(): void {
    this.resetGame();
  }

  resetGame() {
    this.turn = 'X';
    this.errorText = '';
    this.boxes = [];
    this.winner = '';
    for (let row = 1; row <= this.boxCount; row++) {
      for (let col = 1; col <= this.boxCount; col++) {
        this.boxes.push({
          key: this.convertRowColToKey(row, col),
          owner: ''
        });
      }
    }
    Array.from(document.getElementsByClassName("box")).forEach(function(element) {
      element['innerText'] = '';
    });
  }

  boxClicked($event, row, col): void {
    const box: any = this.getBoxValue(row,col);
    switch (box.owner) {
      case 'O':
        this.errorText = 'Player O has already checked the box';
        break;
      case 'X':
        this.errorText = 'Player X has already checked the box';
        break;
      default:
        this.errorText = '';
        switch (this.turn) {
          case 'O':
            box.owner = 'O';
            this.turn = 'X';
            break;
          case 'X':
            box.owner = 'X';
            this.turn = 'O';
            break;
        }
        $event.currentTarget.innerText = box.owner;
        this.testWinner();
    }
  }

  convertRowColToKey(row, col) {
    return row.toString() + col.toString();
  }

  getBoxValue(row, col) {
    let key = this.convertRowColToKey(row + 1, col + 1);
    return this.boxes.find((box: any) => {
      return key === box.key;
    });
  }

  displayBoxValue(row, col) {
    let key = this.convertRowColToKey(row + 1, col + 1);
    return key.value;
  }

  testWinner() {
    const xWin = Array(this.boxCount).fill('X').join().replace(/,/g, '');
    const oWin = Array(this.boxCount).fill('O').join().replace(/,/g, '');

    let cBox = [];
    let rBox = [];

    for (let row = 0; row < this.boxCount; row++) {
      for (let col = 0; col < this.boxCount; col++) {
        let box:any = this.getBoxValue(row, col);
        if (!cBox[col.toString()]) {
          cBox[col.toString()] = box.owner;
        } else {
          cBox[col.toString()] += box.owner;
        }
        if (!rBox[row.toString()]) {
          rBox[row.toString()] = box.owner;
        } else {
          rBox[row.toString()] += box.owner;
        }
      }
    }
    if (rBox.find(box => box === xWin) ||
        cBox.find(box => box === xWin)) {
        this.winner = 'X';
        this.turn = '';
    }
    if (rBox.find(box => box === oWin) ||
        cBox.find(box => box === oWin)) {
      this.winner = 'O';
      this.turn = '';
    }
  }

}
