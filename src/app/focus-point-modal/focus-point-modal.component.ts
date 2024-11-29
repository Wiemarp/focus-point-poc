import {Component, inject, input, Input, TemplateRef} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FocusPointInputComponent} from '../focus-point-input/focus-point-input.component';
import {FormsModule} from '@angular/forms';
import {ImageData} from '../models/image-data';

@Component({
  selector: 'app-focus-point-modal',
  standalone: true,
  imports: [
    FocusPointInputComponent,
    FormsModule
  ],
  templateUrl: './focus-point-modal.component.html',
  styleUrl: './focus-point-modal.component.scss'
})
export class FocusPointModalComponent {
  imageData = input.required<ImageData>();
  private modalService = inject(NgbModal);

  open(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: "lg" }).result.then(
      (result) => {
        console.log(`Closed with: ${result}`);
      },
      () => {
      },
    );
  }

  onSubmitForm(){
    alert(`The form has been submitted with the following coordinate: x: ${this.imageData().focusPoint.x}% y: ${this.imageData().focusPoint.y}%`);
  }
}
