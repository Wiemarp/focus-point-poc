import {Component, input, Input} from '@angular/core';
import {ImageData} from '../models/image-data';

@Component({
  selector: 'app-focus-point-image',
  standalone: true,
  imports: [],
  templateUrl: './focus-point-image.component.html',
  styleUrl: './focus-point-image.component.scss'
})
export class FocusPointImageComponent {
  imageData = input.required<ImageData>();

  getFocusPoint() {
    const { x, y } = this.imageData().focusPoint;
    return `${x}% ${y}%`;
  }
}
