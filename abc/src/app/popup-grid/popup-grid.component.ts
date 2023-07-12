import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-grid',
  templateUrl: './popup-grid.component.html',
  styleUrls: ['./popup-grid.component.css']
})
export class PopupGridComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string,
    public dialogRef: MatDialogRef<PopupGridComponent>
  ) {}
  options: string[] = ['Option A', 'Option B', 'Option C']; // Replace with your own options



  selectValue(option: string) {
    // Pass the selected value back to the parent component
    this.dialogRef.close(option);
  }

  closeDialog() {
    // Close the dialog without passing any value
    this.dialogRef.close();
  }
}
