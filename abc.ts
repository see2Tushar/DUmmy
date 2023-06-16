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

implements CanComponentDeactivate

unsavedChanges = false;

  // This method will be called by the guard
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.unsavedChanges) {
      return confirm('You have unsaved changes. Do you want to leave?');
    }
    return true;
  }

  const routes: Routes = [
    {
      path: 'my-component',
      component: MyComponent,
      canDeactivate: [UnsavedChangesGuard]
    },
    // Other routes
  ];

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.unsavedChanges) {
      return new Observable<boolean>(observer => {
        const confirmation = confirm('You have unsaved changes. Do you want to leave?');
        if (confirmation) {
          // Perform your save logic here
          this.saveChanges().subscribe(
            () => {
              observer.next(true);
              observer.complete();
            },
            error => {
              console.error('Error saving changes:', error);
              observer.next(false);
              observer.complete();
            }
          );
        } else {
          observer.next(false);
          observer.complete();
        }
      });
    }
    return true;
  }

  saveChanges(): Observable<any> {
    // Implement your save logic here, e.g., making an HTTP request
    // Return an observable that represents the save operation
    return new Observable<any>(observer => {
      // Simulate a delay and then emit a success response
      setTimeout(() => {
        observer.next('Save successful');
        observer.complete();
      }, 2000);
    });
  }
