import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-dialog',
  template: `
    <h2>Edit Value</h2>
    <input [(ngModel)]="data.value" />
    <button mat-raised-button color="primary" (click)="save()">Save</button>
    <button mat-raised-button (click)="close()">Cancel</button>
  `,
})
export class EditDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  save(): void {
    this.dialogRef.close(this.data.value);
  }

  close(): void {
    this.dialogRef.close();
  }
}


MatDialogModule

import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from './edit-dialog.component';

@Component({
  selector: 'app-edit-cell-renderer',
  template: `
    <div (click)="openDialog()">{{ value }}</div>
  `,
})
export class EditCellRendererComponent implements ICellRendererAngularComp {
  public value: any;
  private params: any;

  constructor(private dialog: MatDialog) {}

  agInit(params: any): void {
    this.params = params;
    this.value = params.value;
  }

  refresh(params: any): boolean {
    this.params = params;
    this.value = params.value;
    return true;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '250px',
      data: { value: this.value },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        this.value = result;
        this.params.data[this.params.colDef.field] = result;
        this.params.api.refreshCells();
      }
    });
  }
}
