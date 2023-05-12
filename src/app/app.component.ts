import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'checkers';
  rows: number[][] = [
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 0, 2, 0, 2, 0, 2],
    [2, 0, 2, 0, 2, 0, 2, 0],
    [0, 2, 0, 2, 0, 2, 0, 2],
  ];
  saverOne: any = [0, 0];
  saverTwo: any = [0, 0];
  startToggler = false;
  whiteSaver: any = [0, 0];
  switcher = false;

  clickFunc(rows: any, column: any) {
    console.log(
      'rows: ' + rows,
      '  Columns: ' + column,
      '   value: ' + this.rows[rows][column]
    );
    //Whites
    if (this.rows[rows][column] == 1 && !this.switcher) {
      this.whiteSaver = [rows, column];
      if (!this.rows[rows + 1][column - 1]) {
        this.rows[rows + 1][column - 1] = 5;
        this.saverOne = [rows + 1, column - 1];
      }
      if (column + 1 < 8) {
        if (!this.rows[rows + 1][column + 1]) {
          this.rows[rows + 1][column + 1] = 5;
          this.saverTwo = [rows + 1, column + 1];
        }
      }
    }
    //Blacks
    else if (this.rows[rows][column] == 2 && this.switcher) {
      this.whiteSaver = [rows, column];

      if (!this.rows[rows - 1][column - 1] && rows >= 0 && column >= 0) {
        this.rows[rows - 1][column - 1] = 5;
      }
      if (!this.rows[rows - 1][column + 1] && rows >= 0 && column < 7) {
        this.rows[rows - 1][column + 1] = 5;
      }
    }

    if (this.rows[rows][column] == 5) {
      //Whites
      if (!this.switcher) {
        this.rows[rows][column] = 1;
        this.rows[this.whiteSaver[0]][this.whiteSaver[1]] = 0;
        if (column > this.whiteSaver[1] && this.rows[rows][column - 2] == 5) {
          this.rows[rows][column - 2] = 0;
        } else if (column < this.whiteSaver[1] && this.rows[rows][column + 2] == 5) {
          this.rows[rows][column + 2] = 0;
        }
      }
      //Blacks
      else {
        this.rows[rows][column] = 2;
        this.rows[this.whiteSaver[0]][this.whiteSaver[1]] = 0;
        if (column > this.whiteSaver[1] && this.rows[rows][column - 2] == 5) {
          this.rows[rows][column - 2] = 0;
        }
        else if (column < this.whiteSaver[1] && this.rows[rows][column + 2] == 5) {
          this.rows[rows][column + 2] = 0;
        }
      }
      this.switcher = !this.switcher;
    }
  }
}
