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
  bgSaver: any = [9, 9];
  //save the figure when it clicked
  figureSaver: any = [0, 0];
  switcher = false;
  bla = -1;

  clickFunc(rows: any, column: any) {
    console.log(
      'rows: ' + rows,
      '  Columns: ' + column,
      '   value: ' + this.rows[rows][column]
    );

    //Whites
    if (this.rows[rows][column] == 1 && !this.switcher) {
      this.bgSaver = [9, 9];

      //delete green circles after second click
      if (this.figureSaver[0] != 0 || this.figureSaver[1] != 0) {
        if (this.rows[this.figureSaver[0] + 1][this.figureSaver[1] - 1] == 5) {
          this.rows[this.figureSaver[0] + 1][this.figureSaver[1] - 1] = 0;
        }

        if (this.rows[this.figureSaver[0] + 1][this.figureSaver[1] + 1] == 5) {
          this.rows[this.figureSaver[0] + 1][this.figureSaver[1] + 1] = 0;
        }
      }

      this.figureSaver = [rows, column];
      if (!this.rows[rows + 1][column - 1] && rows <= 7 && column >= 0) {
        this.rows[rows + 1][column - 1] = 5;

      }
      if (!this.rows[rows + 1][column + 1] && rows <= 7 && column < 7) {
        this.rows[rows + 1][column + 1] = 5;
      }

      if (this.rows[rows + 1][column - 1] == 2 && rows <= 7 && column >= 0 && !this.rows[rows + 2][column - 2]) {
        this.bgSaver = [rows + 1, column - 1];
        console.log(1);

      }

      if (this.rows[rows + 1][column + 1] == 2 && rows <= 7 && column < 7 && !this.rows[rows + 2][column + 2]) {
        this.bgSaver = [rows + 1, column + 1];
        console.log(2);

      }
    }
    //Blacks
    else if (this.rows[rows][column] == 2 && this.switcher) {
      this.bgSaver = [9, 9];
      console.log(this.figureSaver[0] - 1,this.figureSaver[1] - 1);
      if (this.figureSaver[0] > 0 && this.rows[this.figureSaver[0] - 1][this.figureSaver[1] - 1] == 5) {
        
        this.rows[this.figureSaver[0] - 1][this.figureSaver[1] - 1] = 0;
      }
      else if(this.figureSaver[0] == 0 && this.rows[this.figureSaver[0]][this.figureSaver[1] - 1] == 5){
        this.rows[this.figureSaver[0] - 1][this.figureSaver[1] - 1] = 0;
      }
      
      if (this.figureSaver[0]>0&&this.rows[this.figureSaver[0] - 1][this.figureSaver[1] + 1] == 5) {
        this.rows[this.figureSaver[0] - 1][this.figureSaver[1] + 1] = 0;
      }
      else if(this.figureSaver[0]==0&&this.rows[this.figureSaver[0]][this.figureSaver[1] + 1] == 5)
      {
        this.rows[this.figureSaver[0] - 1][this.figureSaver[1] + 1] = 0;
      }

      this.figureSaver = [rows, column];

      if (!this.rows[rows - 1][column - 1] && rows >= 0 && column >= 0) {
        this.rows[rows - 1][column - 1] = 5;
      }

      if (!this.rows[rows - 1][column + 1] && rows >= 0 && column < 7) {
        this.rows[rows - 1][column + 1] = 5;
      }
      if (this.rows[rows - 1][column - 1] == 1 && rows >= 0 && column >= 0 && !this.rows[rows - 2][column - 2]) {
        this.bgSaver = [rows - 1, column - 1];
      }
      if (this.rows[rows - 1][column + 1] == 1 && rows >= 0 && column < 7 && !this.rows[rows - 2][column + 2]) {
        this.bgSaver = [rows - 1, column + 1];
      }
    }


    if (this.rows[rows][column] == 5) {
      this.bgSaver = [9, 9];

      //Whites
      if (!this.switcher) {
        this.rows[rows][column] = 1;
        this.rows[this.figureSaver[0]][this.figureSaver[1]] = 0;
        if (column > this.figureSaver[1] && this.rows[rows][column - 2] == 5) {
          this.rows[rows][column - 2] = 0;

        } else if (column < this.figureSaver[1] && this.rows[rows][column + 2] == 5) {
          this.rows[rows][column + 2] = 0;
        }
      }
      //Blacks
      else {
        this.rows[rows][column] = 2;
        this.rows[this.figureSaver[0]][this.figureSaver[1]] = 0;
        if (column > this.figureSaver[1] && this.rows[rows][column - 2] == 5) {
          this.rows[rows][column - 2] = 0;
        }
        else if (column < this.figureSaver[1] && this.rows[rows][column + 2] == 5) {
          this.rows[rows][column + 2] = 0;
        }
      }
      this.switcher = !this.switcher;
    }

    if (rows == this.bgSaver[0] && column == this.bgSaver[1]) {
      this.bgSaver = [9, 9];
      if (column > this.figureSaver[1] && this.rows[rows][column - 2] == 5) {
        this.rows[rows][column - 2] = 0;

      } else if (column < this.figureSaver[1] && this.rows[rows][column + 2] == 5) {
        this.rows[rows][column + 2] = 0;
      }
      if (this.rows[rows][column] == 1) {
        if (this.figureSaver[1] > column) {
          this.rows[this.figureSaver[0]][this.figureSaver[1]] = 0;
          this.rows[rows][column] = 0
          this.rows[rows - 1][column - 1] = 2

        }
        else {
          this.rows[this.figureSaver[0]][this.figureSaver[1]] = 0;
          this.rows[rows][column] = 0
          this.rows[rows - 1][column + 1] = 2
        }


      }
      else if (this.rows[rows][column] == 2) {
        if (this.figureSaver[1] > column) {
          this.rows[this.figureSaver[0]][this.figureSaver[1]] = 0;
          this.rows[rows][column] = 0
          this.rows[rows + 1][column - 1] = 1

        }
        else {
          this.rows[this.figureSaver[0]][this.figureSaver[1]] = 0;
          this.rows[rows][column] = 0
          this.rows[rows + 1][column + 1] = 1
        }
      }
      this.switcher = !this.switcher
    }

  }
}
