import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              @Inject(DOCUMENT) private document: Document,
              private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.renderer.addClass(this.document.getElementById('popup'), 'overlay');
  }

  onNoClick(value: any): void {
    this.dialogRef.close();
  }

}
