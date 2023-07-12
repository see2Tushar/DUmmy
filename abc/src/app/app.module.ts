import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { GridComponent } from './grid/grid.component';
import { PopupGridComponent } from './popup-grid/popup-grid.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    PopupGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatDialogModule,
  FormsModule,
  MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
