import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  template: `
    <mat-slider thumbLabel tickInterval="1" [(ngModel)]="value" min="0" max="2" class="custom-slider"></mat-slider>
    <div class="labels">
      <span>Low</span>
      <span>Medium</span>
      <span>High</span>
    </div>
  `,
  styles: [`
    .custom-slider .mat-slider-track-wrapper {
      background-image: linear-gradient(to right, red, gray, green);
    }
    
    .labels {
      display: flex;
      justify-content: space-between;
      margin-top: 16px;
    }
  `]
})
export class SliderComponent {
  value: number = 1;
}
