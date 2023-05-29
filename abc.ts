{
  headerName: 'Name',
  field: 'name',
  editable: true,
  cellEditor: 'popupEditor'
}
{
  headerName: 'Name',
  field: 'name',
  editable: true,
  cellEditor: 'popupEditor'
}

import { Component } from '@angular/core';
import { ICellEditorAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-popup-editor',
  template: `
    <div class="popup-editor">
      <input [(ngModel)]="value" (keydown.enter)="onEnter()" (keydown.esc)="onCancel()" (focusout)="onEnter()">
    </div>
  `,
  styles: [
    `
    .popup-editor {
      position: absolute;
      background-color: white;
      border: 1px solid lightgrey;
      padding: 5px;
      z-index: 1000;
    }
    `
  ]
})
export class PopupEditorComponent implements ICellEditorAngularComp {
  private params: any;
  public value: any;

  agInit(params: any): void {
    this.params = params;
    this.value = this.params.value;
  }

  getValue(): any {
    return this.value;
  }

  onEnter(): void {
    this.params.stopEditing();
  }

  onCancel(): void {
    this.params.stopEditing(true);
  }
}


import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { PopupEditorComponent } from './popup-editor.component';

@NgModule({
  declarations: [PopupEditorComponent],
  imports: [AgGridModule.withComponents([PopupEditorComponent])]
})
export class AppModule { }


import { Component } from '@angular/core';

@Component({
  selector: 'app-grid',
  template: `
    <ag-grid-angular [rowData]="rowData" [columnDefs]="columnDefs" [gridOptions]="gridOptions">
    </ag-grid-angular>
  `
})
export class GridComponent {
  rowData: any[];
  columnDefs: any[];
  gridOptions: any;

  constructor() {
    this.rowData = /* your row data */;
    this.columnDefs = [
      // Column definitions including the one with the custom editor
    ];
    this.gridOptions = {
      // Other grid options
      defaultColDef: {
        // Set the custom editor component for popup editing
        cellEditorFramework: 'popupEditor'
      }
    };
  }
}
