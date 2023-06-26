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
        <span class="toggle-slider"></span>
      </label>
      <label class="toggle-option">
        <input
          type="radio"
          [value]="'option2'"
          [checked]="toggleValue === 'option2'"
          (change)="onToggleChange($event.target.value)"
        />
        <span class="toggle-slider"></span>
      </label>
      <label class="toggle-option">
        <input
          type="radio"
          [value]="'option3'"
          [checked]="toggleValue === 'option3'"
          (change)="onToggleChange($event.target.value)"
        />
        <span class="toggle-slider"></span>
      </label>
    </div>
  `,
  styles: [`
    .toggle-container {
      display: flex;
      align-items: center;
      height: 34px;
      width: 180px;
      background-color: #ccc;
      border-radius: 17px;
      overflow: hidden;
    }

    .toggle-option {
      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background-color 0.2s;
    }

    .toggle-option:hover {
      background-color: #ddd;
    }

    .toggle-option input {
      display: none;
    }

    .toggle-slider {
      width: 50px;
      height: 30px;
      background-color: #fff;
      border-radius: 15px;
      transition: transform 0.2s;
    }

    .toggle-option input:checked + .toggle-slider {
      transform: translateX(90px);
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
