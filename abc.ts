import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-three-way-toggle',
  template: `
    <div class="toggle-container">
      <label class="toggle-option">
        <input
          type="radio"
          [value]="'option1'"
          [checked]="toggleValue === 'option1'"
          (change)="onToggleChange($event.target.value)"
        />
        Option 1
      </label>
      <label class="toggle-option">
        <input
          type="radio"
          [value]="'option2'"
          [checked]="toggleValue === 'option2'"
          (change)="onToggleChange($event.target.value)"
        />
        Option 2
      </label>
      <label class="toggle-option">
        <input
          type="radio"
          [value]="'option3'"
          [checked]="toggleValue === 'option3'"
          (change)="onToggleChange($event.target.value)"
        />
        Option 3
      </label>
    </div>
  `,
  styles: [`
    .toggle-container {
      display: flex;
    }

    .toggle-option {
      margin-right: 10px;
    }
  `]
})
export class ThreeWayToggleComponent {
  @Input() toggleId: string;
  toggleValue: string = 'option1';

  onToggleChange(value: string) {
    this.toggleValue = value;
  }
}
