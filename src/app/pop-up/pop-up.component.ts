import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: "DialogData",
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }
  ngOnInit(): void {
  }
  onYesClick():void{
    this.dialogRef.close(true);
  }
}
