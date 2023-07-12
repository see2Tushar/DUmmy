import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridComponent, RowData } from './grid.component';

fdescribe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatTableModule
      ],
      declarations: [GridComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should add a new row on clicking the "Add" button', () => {
    const initialRowCount = component.dataSource.data.length;

    component.newRow.name = 'John Doe';
    component.newRow.age = 30;
    const addButton = fixture.nativeElement.querySelector('button');
    addButton.click();
    fixture.detectChanges();

    const finalRowCount = component.dataSource.data.length;
    expect(finalRowCount).toBe(initialRowCount + 1);
    expect(component.dataSource.data[finalRowCount - 1]).toEqual({ name: 'John Doe', age: 30 });
  });

  it('should toggle form visibility on clicking the "Add" button', () => {
    const addButton = fixture.nativeElement.querySelector('button');
    addButton.click();
    fixture.detectChanges();

    expect(component.isFormVisible).toBe(true);

    addButton.click();
    fixture.detectChanges();

    expect(component.isFormVisible).toBe(false);
  });

  it('should edit a row on clicking the "Edit" button and save changes on pressing Enter', () => {
    const initialRow: RowData = { name: 'John Doe', age: 30 };
    component.dataSource.data = [initialRow];
    fixture.detectChanges();

    const editButton = fixture.nativeElement.querySelector('button[aria-label="Edit"]');
    editButton.click();
    fixture.detectChanges();

    const nameInput = fixture.nativeElement.querySelector('input[name="name"]');
    const ageInput = fixture.nativeElement.querySelector('input[name="age"]');
    nameInput.value = 'Jane Smith';
    nameInput.dispatchEvent(new Event('input'));
    ageInput.value = 35;
    ageInput.dispatchEvent(new Event('input'));
    ageInput.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }));
    fixture.detectChanges();

    expect(component.dataSource.data[0]).toEqual({ name: 'Jane Smith', age: 35 });
  });

  it('should delete a row on clicking the "Delete" button', () => {
    const initialRow: RowData = { name: 'John Doe', age: 30 };
    component.dataSource.data = [initialRow];
    fixture.detectChanges();

    const deleteButton = fixture.nativeElement.querySelector('button[aria-label="Delete"]');
    deleteButton.click();
    fixture.detectChanges();

    expect(component.dataSource.data.length).toBe(0);
  });
});
