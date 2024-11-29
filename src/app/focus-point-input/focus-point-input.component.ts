import {
  Component,
  forwardRef,
  Input,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import {Coordinate} from '../models/coordinate';

@Component({
  selector: 'app-focus-point-input',
  standalone: true,
  templateUrl: './focus-point-input.component.html',
  styleUrl: './focus-point-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FocusPointInputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => FocusPointInputComponent),
      multi: true,
    },
  ]
})
export class FocusPointInputComponent
  implements ControlValueAccessor, Validator {

  @Input() imageSrc: string = '';

  coordinates: Coordinate = { x: 50, y: 50};
  private _value: Coordinate = {x: 50, y: 50};

  private isDragging = false;

  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  onImageClick(event: MouseEvent, imageElement: HTMLImageElement): void {
    const rect = imageElement.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    const imageWidth = imageElement.width;
    const imageHeight = imageElement.height;

    const percentageX = (clickX / imageWidth) * 100;
    const percentageY = (clickY / imageHeight) * 100;

    this.coordinates = { x: percentageX, y: percentageY };
    this._value = this.coordinates;
    this.onChange(this._value);
  }

  onMouseDown(event: MouseEvent, imageElement: HTMLImageElement): void {
    this.isDragging = true;
    this.onMouseMove(event, imageElement);
  }

  onMouseMove(event: MouseEvent, imageElement: HTMLImageElement): void {
    if (!this.isDragging) return;

    const rect = imageElement.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const imageWidth = imageElement.width;
    const imageHeight = imageElement.height;

    const percentageX = (mouseX / imageWidth) * 100;
    const percentageY = (mouseY / imageHeight) * 100;

    this.coordinates = { x: percentageX, y: percentageY };
    this._value = this.coordinates;
    this.onChange(this._value);
  }

  onMouseUp(event: MouseEvent): void {
    if (this.isDragging) {
      this.isDragging = false;
      this.onTouched();
    }
  }

  writeValue(value: Coordinate | null): void {
    if (value) {
      this.coordinates = value;
      this._value = value;
    }
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  validate(): ValidationErrors | null {
    return this.coordinates ? null : { coordinatesRequired: true };
  }
}

