import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-spinner',
  templateUrl: './dialog-spinner.component.html',
  styleUrls: ['./dialog-spinner.component.scss']
})
export class DialogSpinnerComponent implements OnInit {

  hidden = true;

  constructor(public dialogRef: MatDialogRef<DialogSpinnerComponent>) { }

  ngOnInit(): void {
  }

  open() {
    this.hidden = false;
  }

  close() {
    this.hidden = true;
  }

}
