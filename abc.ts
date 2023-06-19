import { Component } from '@angular/core';
import { AgEditorComponent } from 'ag-grid-angular';

@Component({
  selector: 'app-custom-select-cell-editor',
  template: `
    <select [disabled]="!shouldOpenEditor" (keydown)="onKeyDown($event)">
      <option *ngFor="let option of values" [value]="option">{{ option }}</option>
    </select>
  `
})
export class CustomSelectCellEditor implements AgEditorComponent {
  shouldOpenEditor: boolean;
  values: any[];

  agInit(params: any): void {
    this.shouldOpenEditor = params.shouldOpenEditor;
    this.values = params.values;
  }

  getValue(): any {
    // Return the selected value or any other logic as needed
    // For example, you can return the selected value from the select element
    return 'TODO: Implement getValue()';
  }

  onKeyDown(event: KeyboardEvent): void {
    // Handle key events if required
  }
}


const columnDefs = [
  {
    headerName: 'Country',
    field: 'country',
    cellEditor: 'customSelectCellEditor',
    cellEditorParams: {
      values: ['USA', 'Canada', 'UK', 'Australia'],
      shouldOpenEditor: true // Provide the condition flag to the cell editor
    }
  },
  // Other column definitions...
];


import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { CustomSelectCellEditor } from './custom-select-cell-editor.component';

@NgModule({
  declarations: [CustomSelectCellEditor],
  imports: [AgGridModule.withComponents([CustomSelectCellEditor])]
})
export class AppModule { }
