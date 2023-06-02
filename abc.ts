import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class UnsavedChangesGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}


import { Component } from '@angular/core';
import { CanComponentDeactivate } from '../unsaved-changes.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponent implements CanComponentDeactivate {
  unsavedChanges = false;

  // This method will be called by the guard
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.unsavedChanges) {
      return confirm('You have unsaved changes. Do you want to leave?');
    }
    return true;
  }

  // Other methods and logic of your component
}


