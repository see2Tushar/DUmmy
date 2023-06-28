import { Component } from '@angular/core';

@Component({
  template: `
    <span [class.highlight-cell]="params.value === 'completed'">
      {{ params.value }}
    </span>
  `,
  styles: [
    `
    .highlight-cell {
      background-color: yellow;
    }
    `
  ]
})
export class StatusCellRendererComponent {
  params: any;

  agInit(params: any): void {
    this.params = params;
  }
}



import { Component } from '@angular/core';
import { StatusCellRendererComponent } from './status-cell-renderer.component';

@Component({
  selector: 'app-root',
  template: `
    <ag-grid-angular
      style="width: 100%; height: 500px"
      class="ag-theme-alpine"
      [rowData]="rowData"
      [columnDefs]="columnDefs"
      [frameworkComponents]="frameworkComponents"
      [getRowClass]="getRowClass"
    ></ag-grid-angular>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rowData = [
    { id: 1, name: 'John', status: 'completed' },
    { id: 2, name: 'Jane', status: 'in-progress' },
    { id: 3, name: 'Bob', status: 'completed' },
    { id: 4, name: 'Alice', status: 'in-progress' }
  ];

  columnDefs = [
    { headerName: 'ID', field: 'id' },
    { headerName: 'Name', field: 'name' },
    {
      headerName: 'Status',
      field: 'status',
      cellRenderer: 'statusCellRenderer'
    }
  ];

  frameworkComponents = {
    statusCellRenderer: StatusCellRendererComponent
  };

  getRowClass(params: any): string {
    if (params.data.status === 'completed') {
      return 'highlight-row';
    }
    return '';
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { StatusCellRendererComponent } from './status-cell-renderer.component';

@NgModule({
  declarations: [AppComponent, StatusCellRendererComponent], // Add your custom cell renderer component
  imports: [
    BrowserModule,
    AgGridModule.withComponents([StatusCellRendererComponent]) // Add your custom cell renderer component to the withComponents array
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
