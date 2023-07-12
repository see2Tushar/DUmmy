import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

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

  constructor() {
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
}
