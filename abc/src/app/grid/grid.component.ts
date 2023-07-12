import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { PopupGridComponent } from '../popup-grid/popup-grid.component';

export interface RowData {
  name: string;
  age: number;
  isEdit?: boolean;
}

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  dataSource: MatTableDataSource<RowData>;
  displayedColumns: string[] = ['name', 'age', 'actions'];
  newRow: RowData = {
    name: '',
    age: 0
  };
  isFormVisible: boolean = false;

  constructor(private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<RowData>([]);
  }

  addRow() {
    this.dataSource.data.push({ ...this.newRow });
    this.dataSource.data = [...this.dataSource.data];
    this.newRow.name = '';
    this.newRow.age = 0;
  }

  toggleFormVisibility() {
    this.isFormVisible = !this.isFormVisible;
  }

  editRow(row: RowData) {
    row.isEdit = true;
  }

  saveRow(row: RowData) {
    row.isEdit = false;
  }

  deleteRow(index: number) {
    this.dataSource.data.splice(index, 1);
    this.dataSource.data = [...this.dataSource.data];
  }
  openPopupGrid() {
    const dialogRef = this.dialog.open(PopupGridComponent, {
      width: '400px',
      height: '300px',
      data: this.newRow.name
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result) {
        this.newRow.name = result;
      }
    });
  }
  onOptionSelected(row: RowData, event: any) {
    row.name = event.option.value;
  }
}
